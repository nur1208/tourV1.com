import express from "express";
import {
  resetPassword,
  forgetPassword,
  login,
  signUp,
  updatePassword,
  protect,
  restrictTo,
} from "../controllers/authController.js";
import {
  createUser,
  deleteMe,
  deleteUser,
  getAllUsers,
  getMe,
  getUser,
  resizeUserPhoto,
  updateMe,
  updateUser,
  uploadUserPhoto,
} from "../controllers/userController.js";

// multer is  middleware for multi-part form data
/**
 * @file userRouter.js contains all the routers of tour requests
 */


const router = express.Router();

// route for login users using one middleware:
// 1 - login
router.post("/login", login);

router.post("/signup", signUp);

router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:token", resetPassword);

// router is like mini app so we can use "use" function with it.
// and the code in here run line by line.
router.use(protect);

// all the route in here have the protect middleware in their middleware stick
router.patch("/updateMyPassword", updatePassword);

router.patch(
  "/updateMe",
  uploadUserPhoto,
  resizeUserPhoto,
  updateMe
);
router.delete("/deleteMe", deleteMe);
router.get("/me", getMe, getUser);

// all the routers after this route for admin only
router.use(restrictTo("admin"));

router.route("/").get(getAllUsers).post(createUser);
router
  .route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

export default router;
