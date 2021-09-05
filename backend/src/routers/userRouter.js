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
  updateMe,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);

router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:token", resetPassword);

// router is like mini app so we can use "use" function with it.
// and the code in here run line by line.
router.use(protect);

// all the route in here have the protect middleware in their middleware stick
router.patch("/updateMyPassword", updatePassword);

router.patch("/updateMe", updateMe);
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
