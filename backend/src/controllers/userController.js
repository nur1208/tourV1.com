import multer from "multer";
import sharp from "sharp";
import catchAsync from "../../utils/catchAsync.js";
import User from "../models/userModel.js";
import AppError from "../../utils/appError.js";
import {
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";
// create our customs upload (we need multerStorage and multerFilter)
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img/users");
//   },
//   // file is the file object that we consoled it
//   filename: (req, file, cb) => {
//     // user-userId-timeStamp.jpeg
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user._id}-${Date.now()}.${ext}`);
//   },
// });

const multerStorage = multer.memoryStorage();

// we use multerFilter to check if the file image or not
// for security propose
// cb(error,value you want to pass)
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      new AppError("Not image! Please upload only images", 400),
      false
    );
  }
};

export const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

export const uploadUserPhoto = upload.single("photo");

export const resizeUserPhoto = catchAsync(
  async (req, res, next) => {
    // no image to resize
    if (!req.file) return next();
    // now this then crop the image so  that it conver this entire 500 * 500 square

    req.file.filename = `user-${req.user._id}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`public/img/users/${req.file.filename}`);
    // we going to use the sharp package to resize the image

    next();
  }
);

export const getAllUsers = getAll(User);

export const getUser = getOne(User);

export const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
// for admin
// don't update password with this
export const updateUser = updateOne(User);

export const deleteUser = deleteOne(User);

export const deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  // 204 means deleted
  res.status(204).json({
    status: "success",
    data: null,
  });
});

/// user get his won data
export const getMe = (req, res, next) => {
  req.params.id = req.user.id;

  next();
};

// this for the normal user
export const updateMe = catchAsync(async (req, res, next) => {
  // 1) current error if the user posts password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password update please use / updateMyPassword",
        400
      )
    );
  }
  // 2) update user current data

  const filteredBody = filterObj(req.body, "name", "email");
  if (req.file) filteredBody.photo = req.file.filename;

  console.log({ file: req.file, body: req.body });

  // const updatedUser = await User.findByIdAndUpdate(
  //   req.user.id,
  //   filteredBody,
  //   { new: true, runValidators: true }
  // );

  res.status(200).json({
    status: "success",
    // data: { user: updatedUser },
  });
});
