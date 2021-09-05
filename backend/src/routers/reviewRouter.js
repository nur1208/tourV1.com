import express from "express";
import {
  protect,
  restrictTo,
} from "../controllers/authController.js";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReview,
  setTourUserIds,
  updateReview,
} from "../controllers/reviewController.js";
// in order to get access to "tourId" in tourRouter
// you must set mergeParams to true
const reviewRouter = express.Router({ mergeParams: true });

reviewRouter
  .route("/")
  .get(getAllReviews)
  .post(protect, restrictTo("user"), setTourUserIds, createReview);

reviewRouter.use(protect);

reviewRouter
  .route("/:id")
  .get(getReview)
  .patch(restrictTo("user", "admin"), updateReview)
  .delete(restrictTo("user", "admin"), deleteReview);

export default reviewRouter;
