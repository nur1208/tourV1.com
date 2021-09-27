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

// route of getting tour statistics using one middleware:
// 1 - getTourStats
tourRouter.route("/tour-stats").get(getTourStats);

// route of getting monthly plan for admin, lead-guid or lead
// using three middleware:
// 1 - protect (the user need to be logged in)
// 2 - restrictTo function that return middleware (to restrict specific users (admin, ...))
// 3 - getMonthlyPlan middleware to get a monthly plan of specific year
tourRouter
  .route("/monthly-plan/:year")
  .get(
    protect,
    restrictTo("admin", "lead-guide", "lead"),
    getMonthlyPlan
  );

// route of getting tours of within lat Lng points (around the point that was giving to it) using one middleware:
// 1 - getToursWithin
tourRouter
  .route("/tours-within/:distance/center/:latLng/unit/:unit")
  .get(getToursWithIn);

// route of getting distances of giving lat leg 
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
