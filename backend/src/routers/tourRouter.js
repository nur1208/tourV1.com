import express from "express";
import {
  protect,
  restrictTo,
} from "../controllers/authController.js";
import {
  aliasTopTours,
  createTour,
  deleteTour,
  getAllTours,
  getDistances,
  getMonthlyPlan,
  getTour,
  getTourStats,
  getToursWithIn,
  resizeTourImages,
  updateTour,
  uploadTourImages,
} from "../controllers/tourController.js";
import reviewRouter from "./reviewRouter.js";

/**
 * @file tourRouter.js contains all the routers of tour requests
 */
// this is the  middleware stack
// const m = middleware
// morgan m - json m - clg m - adding requestedAT m
// - tourRouter m  -  tourRouter.param m - tourRouter.route
// - getTour

// this is the  middleware stack
// const m = middleware
// morgan m - json m - clg m - adding requestedAT m
// - userRouter m   - tourRouter.route
// - getUser

// this is middleware for just "/api/v1/tours/*" router
const tourRouter = express.Router();
// this is param middleware
// tourRouter.param("name", checkId);

tourRouter.use("/:tourId/reviews", reviewRouter);

// route of getting top 5 best cheapest tours using two middleware:
// 1-  aliasTopTours
// 2 - getAllTours
tourRouter.route("/top-5-cheap").get(aliasTopTours, getAllTours);

tourRouter.route("/tour-stats").get(getTourStats);
tourRouter
  .route("/monthly-plan/:year")
  .get(
    protect,
    restrictTo("admin", "lead-guide", "lead"),
    getMonthlyPlan
  );

tourRouter
  .route("/tours-within/:distance/center/:latLng/unit/:unit")
  .get(getToursWithIn);

tourRouter
  .route("/distances/:latLng/unit/:unit")
  .get(getDistances);

// everybody can call getAllTour route
// admin and lead-guide are only user can create a new tour
tourRouter
  .route("/")
  .get(getAllTours)
  .post(protect, restrictTo("admin", "lead-guide"), createTour);

// admin and lead-guide are only users can update tour or delete it
// get single tour is also for everybody

tourRouter
  .route("/:id")
  .get(getTour)
  .patch(
    protect,
    restrictTo("admin", "lead-guide"),
    uploadTourImages,
    resizeTourImages,
    updateTour
  )
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

// tourRouter
//   .route("/:tourId/reviews")
//   .post(protect, restrictTo("user"), createReview);

export default tourRouter;
