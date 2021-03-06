import { promisify } from "util";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import catchAsync from "../../utils/catchAsync.js";
import User from "../models/userModel.js";
import AppError from "../../utils/appError.js";
import sendEmail from "../../utils/sendEmail.js";
// import { Email } from "../../utils/email.js";

const signToken = (id) => {
  const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

  return jwt.sign(
    {
      id,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() +
        process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // if env production set secure to true
    // cuz we only need that in production
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });

  // Remove the password from the output, don't use save on user
  // that will remove it from the data base

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
};

/**
 * signUp middleware is very simple, it for registering users to our server, a user should pass name, email, password, passwordConfirm
 */
export const signUp = catchAsync(async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  // const url = `${req.protocol}://${req.get("host")}/me`;
  // console.log({ url });

  // await new Email(newUser, url).sendWelcome();
  // await new Email(newUser, url).sendEmailDev(
  //   "welcome",
  //   "Welcome to tour.com"
  // );

  // await sendEmail({
  //   email: newUser.email,
  //   subject: "your password reset token valid for 10 minutes",
  //   message: "something",
  // });
  createSendToken(newUser, 201, res);

  // const token = signToken(newUser._id);

  // res.status(201).json({
  //   status: "success",
  //   token,
  //   data: { user: newUser },
  // });
});

/**
 * login middleware is for login user to our server
 * - the user must send email and password in req.body
 * - checking if the email exist in our database
 * - if the email exist check if the password correct using bcrypt.compare function
 * - if all checking passed
 * - set jwt token in a user's browser cookie
 * - send jwt and a user info to the cline
 */
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // console.log("here");

  // 1 check if email and password exist

  if (!email || !password) {
    return next(
      new AppError("please provide email and password", 400)
    );
  }

  // 2 check if a user exist and the password correct

  const user = await User.findOne({ email }).select("+password");

  const isCorrectPassword = await user.correctPassword(
    password,
    user.password
  );
  // console.log({ isCorrectPassword });

  // 401 means unauthorized
  if (!user || !isCorrectPassword) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 3 if the everything okay send the token to the clint

  createSendToken(user, 200, res);

  // const token = signToken(user._id);
  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     token,
  //   },
  // });
});

/**
 * protect middleware for allowing only logged in user to access all protect routes
 * - using jwt jsonWebToken that will be create and then send it to a user every time a user login to our system
 * - when a user send request to protect route a user need to send jwt to access that protect route
 * - if a user allowed to access a protect route then send a data to a user else send a user some error message
 */
export const protect = catchAsync(async (req, res, next) => {
  let token;
  // console.log(`here`);

  // 1 getting token and check if it's there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError(
        "you are not logged in! Please log in to get access",
        401
      )
    );
  }
  // 2 verification token
  const decode = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // 3 check if user still exists
  const currentUser = await User.findById(decode.id);
  // if the user delete after we send him a token
  // and before the token expired
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist",
        401,
        "TokenExpiredError"
      )
    );
  }
  // 4 check if user changed password after the token
  if (currentUser.changePasswordAfter(decode.iat)) {
    return next(
      new AppError(
        "User recently changed password! Please log in again",
        401,
        "TokenRecentlyChangedPasswordError"
      )
    );
  }

  // grant access to protected route
  req.user = currentUser;
  next();
});

/**
 * restrictTo is Closure Function and it's for limiting access to some users for some routes
 * - param   roles - array of roles (admin, lead and ...)
 * - returns middleware
 */
export const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          "you do not have permission to perform this action",
          403 // 403 means forbidden
        )
      );
    }

    next();
  };

/**
 * forgetPassword middleware is for sending reset token to the user using the following steps:
 * - get user based on Posted email
 * - generate the random token
 * - send it to user's email
 */
export const forgetPassword = catchAsync(
  async (req, res, next) => {
    // 1) get user based on Posted email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(
        new AppError("There is no user with email address", 404)
      );
    }
    // 2) generate the random token
    const resetToken = user.createPasswordRestToken();

    await user.save({ validateBeforeSave: false });

    // 3) send it to user's email
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/users/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to ${resetURL}. if you didn't forget your password, please ignore this email`;

    try {
      await sendEmail({
        email: user.email,
        subject: "your password reset token valid for 10 minutes",
        message,
      });

      // console.log("here");

      res.status(200).json({
        status: "success",
        message: "Token set to email",
        data: {},
      });
    } catch (error) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      return next(
        new AppError(
          "there was an error sending the email, Try again later",
          500
        )
      );
    }
  }
);

/**
 * resetPassword middleware for validating reset token and reset a user password if the token is valid using the following steps:
 * -  get user base on the token.
 * - if token has not expired and there is a user so in that case, set the new password
 * - update the changedPasswordAt for the current user
 * - log the user in, send the JSON Web Token to the client
 */
export const resetPassword = async (req, res, next) => {
  // 1) get user base on the token.

  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //2)if token has not expired and there is a user so in that case, set the new password
  if (!user) {
    return next(
      new AppError("Token is invalid or has expired", 400)
    );
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  // 3) update the changedPasswordAt for the current user
  // we did using per save mongoose middleware
  await user.save();

  //4) log the user in, send the JSON Web Token to the client
  createSendToken(user, 201, res);
};

/**
 * updatePassword is middleware for letting logged in users update their password
 * using the following steps:
 *  - get the user from the collection
 *  - check if posted current password is correct
 *  - if all conditions passed update password
 *  - "re login" the user
 */
export const updatePassword = async (req, res, next) => {
  //  1 ) get the user from the collection
  const { password, passwordConfirm } = req.body;
  const user = await User.findById(req.user.id).select(
    "+password"
  );

  if (!user) {
    return next(new AppError("user with that id not exist", 404));
  }
  // 2 ) check if posted current password is correct

  if (!password) {
    return next(new AppError("password is required", 400));
  }


  if (await user.correctPassword(password, user.password)) {
    return next(new AppError("incorrect password", 401));
  }
  // 3 ) if _id, update password

  user.password = password;
  user.passwordConfirm = passwordConfirm;

  await user.save();
  // 4 ) log in the user
  createSendToken(user, 201, res);
};
