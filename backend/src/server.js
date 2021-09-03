// this file for everything relate to server.
import mongoose from "mongoose";
import app from "./app.js";

process.on("uncaughtException", (err) => {
  // eslint-disable-next-line no-console
  console.log("unhandled Rejection Shuting down... ");
  // eslint-disable-next-line no-console
  console.log({ err: err.message });
  process.exit(1);
});

const main = async () => {
  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

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

process.on("unhandledRejection", (err) => {
  // eslint-disable-next-line no-console
  console.log("unhandled Rejection Shuting down... ");
  // eslint-disable-next-line no-console
  console.log({ err });
  server.close(() => {
    process.exit(1);
  });
});

main();
