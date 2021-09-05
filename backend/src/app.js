import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import path from "path";
import cors from "cors";

import AppError from "../utils/appError.js";
import tourRouter from "./routers/tourRouter.js";
import userRouter from "./routers/userRouter.js";
import globalErrorHandler from "./controllers/errorController.js";
import reviewRouter from "./routers/reviewRouter.js";
// this file for everything relate to express.
// 1 - global middleware
dotenv.config({ path: "./config.env" });
const app = express();
const dirname = path.resolve();
app.set("view engine", "pug");

app.set("view", path.join(dirname, "views"));

// serving static files
// middleware for static files (/img/favicon.png)
app.use(express.static(path.join(dirname, "public")));
// SEt Security Http headers
// helmet return a function
app.use(helmet());

//Todo set this to development only
// the development log in
app.use(morgan("dev"));

// limit request from sane api
// 100 request per hour, that how much the user can send requests to our server
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    "Too many requests from this IP, please try again in an hour!",
});

// we want to apply this limiter only to a /api meaning
// we the ap
app.use("/api", limiter);

// middleware for adding data to request.
app.use(express.json({ limit: "10kb" }));

// data sanitization against NoSQL injection
app.use(mongoSanitize()); // it will remove all $

// data sanitization against XSS
app.use(xss());

// hpp stands for http parameter pollution
// Prevent parameter pollution
app.use(
  hpp({
    whiteList: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use(cors({ origin: "http://localhost:3000" }));

// test
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

app.get("/", (res, req) => {
  res.status(200).render("base");
});

// os it's a good practice to specify the API  version.
// so in cause you want to do some change in your API
// and we can do that simply then on v2 without breaking
// everyone who is still using v1.
// the callback in get function we called route handler.

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);

app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: "fail",
  //   message: `can't find ${req.originalUrl} on this server`,
  // });

  // const err = new Error(
  //   `can't find ${req.originalUrl} on this server`
  // );

  // err.status = "fail";
  // err.statusCode = 404;

  next(
    new AppError(
      `can't find ${req.originalUrl} on this server`,
      404
    )
  );
});

app.use(globalErrorHandler);
export default app;
