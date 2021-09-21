/**
 * @file this file for everything relate to server.
 */
// this file for everything relate to server.
import mongoose from "mongoose";
import app from "./app.js";

/**
 *  handling uncaught Exception error globally
 * @param {TypeError} err uncaught error object
 * @returns {void}
 *
 */
const handleUnCaughtException = (err) => {
  // eslint-disable-next-line no-console
  console.log("unhandled Exception Shuting down... ");
  // eslint-disable-next-line no-console
  console.log({ err: err.message });
  process.exit(1);
};

process.on("uncaughtException", handleUnCaughtException);

/**
 * main function to use 'await' keyword inside server.js
 * @returns {void}
 */
const main = async () => {
  // const DB = process.env.DATABASE.replace(
  //   "<PASSWORD>",
  //   process.env.DATABASE_PASSWORD
  // );

  const DB = process.env.DATABASE_LOCAL;

  await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  // eslint-disable-next-line no-console
  console.log("DB connection successful");

  // eslint-disable-next-line no-console
  console.log({ env: process.env.NODE_ENV });
};

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listen at port: + ${port}`);
});

/**
 *  handling unhandled Rejection error globally
 * @param {TypeError} err uncaught error object
 * @returns {void}
 *
 */
const unhandledRejection = (err) => {
  // eslint-disable-next-line no-console
  console.log("unhandled Rejection Shuting down... ");
  // eslint-disable-next-line no-console
  console.log({ err });
  server.close(() => {
    process.exit(1);
  });
};

process.on("unhandledRejection", unhandledRejection);

main();
