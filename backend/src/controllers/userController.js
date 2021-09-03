import catchAsync from "../../utils/catchAsync.js";
import User from "../models/userModel.js";
import AppError from "../../utils/appError.js";
import {
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

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
  const { name, email } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { name, email },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: { user: updatedUser },
  });
});
