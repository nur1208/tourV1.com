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
import compression from "compression";

import AppError from "../utils/appError.js";
import tourRouter from "./routers/tourRouter.js";
import userRouter from "./routers/userRouter.js";
import globalErrorHandler from "./controllers/errorController.js";
import reviewRouter from "./routers/reviewRouter.js";
/**
 * @file this file for everything relate to express app.
 */
// this file for everything relate to express.

// 1 - global middleware
dotenv.config({ path: "./config.env" });
/**
 * creating express app
 * @type {Express}
 */
const app = express();
const dirname = path.resolve();
// app.set("view engine", "pug");

// app.set("view", path.join(dirname, "views"));

// serving static files
// middleware for static files (/img/favicon.png)

/**
 * middleware for serving static files to the client
 */
const staticFiles = express.static(path.join(dirname, "public"));
app.use(staticFiles);

// SEt Security Http headers
// helmet return a function

/**
 * set http security headers to increase the security of our server
 */
const httpSecurityHeaders = helmet();
app.use(httpSecurityHeaders);

//Todo set this to development only
// the development log in
/**
 * log in all requests that sent to our server for the developer to see them
 */
const morganDev = morgan("dev");
app.use(morganDev);

// limit request from sending api
//  request 100  per hour, that how much the user can send requests to our server

/**
 * limit request sending from IP to 100 request per hour.
 * for security purpose
 * max - limit of  request that the user can send
 * windowMs - time of restarting the number of request
 * message - when the user reach the limit he/her will see the message
 */
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
/**
 * middleware for adding data to request and limit the size of date that a user can send (for security purpose).
 */
const addDataToRequest = express.json({ limit: "10kb" });
app.use(addDataToRequest);

// data sanitization against NoSQL injection
/**
 * data sanitization against NoSQL injection, it will remove all $
 * (for security purpose).
 */
const noSQlInjection = mongoSanitize();
app.use(noSQlInjection); // it will remove all $

// data sanitization against XSS

/**
 * data sanitization against XSS, in other word clean user input from any javascript injection
 */
const sanitizationXss = xss();
app.use(sanitizationXss);
//HPP puts array parameters in req.query and/or req.body aside and just selects the last parameter value. You add the middleware and you are done.
// hpp stands for http parameter pollution
// Prevent parameter pollution (just take the last parameter) like php
// white list means the element inside it it's okay to bey array of value

/**
 * - Prevent parameter pollution (just take the last parameter) like php
 * - white list means the element inside it , it's okay to be array of values
 */

const preventParameterPollution = hpp({
  whiteList: [
    "duration",
    "ratingsQuantity",
    "ratingsAverage",
    "maxGroupSize",
    "difficulty",
    "price",
  ],
});

app.use(preventParameterPollution);

/**
 * compression middleware for making our server faster by reducing the data that we'll send to the clients
 */

const compressionData = compression();
app.use(compressionData);

/**
 * cors middleware for Access-Control-Allow-Origin
 * allowing localhost:3000 to send requests to our server
 */
const allowAccess = cors({ origin: "http://localhost:3000" });
app.use(allowAccess);

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

/**
 * middleware for handling a wrong http request
 */
const handleWrongURL = (req, res, next) => {
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
};

app.all("*", handleWrongURL);

app.use(globalErrorHandler);

export default app;
