import AppError from "../../utils/appError.js";

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;

  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.message.match(
    /(["'])(?:(?=(\\?))\2.)*?\1/
  )[0];
  // const value = err.keyValue.name;

  const message = `Duplicate field value: '${value}' please use another value`;
  // 400 means bad request
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  // loop through object
  const errors = Object.values(err.errors).map(
    (el) => el.message
  );
  const message = `invalid input Data. ${errors.join(", ")}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError("Invalid token, Please login again", 401);

const handleJWTExpired = () =>
  new AppError(
    "Your token has expired! please login again",
    401
  );

const handleJWTRecentlyCPError = () =>
  new AppError(
    "User recently changed password! Please log in again",
    401
  );
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error("error", err);

    res.status(err.statusCode).json({
      status: "error",
      message: "something went wrong",
    });
  }
};
export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;
    if (error.name === "CastError") {
      error = handleCastErrorDB(error);
    }

    if (error.code === 11000) {
      error = handleDuplicateFieldsDB(error);
    }

    if (
      error._message &&
      error._message.includes("validation failed")
    ) {
      error = handleValidationErrorDB(error);
    }

    if (error.name === "JsonWebTokenError") {
      error = handleJWTError();
    }

    if (error.name === "TokenExpiredError") {
      error = handleJWTExpired();
    }

    if (error.name === "TokenRecentlyChangedPasswordError") {
      error = handleJWTRecentlyCPError();
    }

    sendErrorProd(error, res);
  }
};
