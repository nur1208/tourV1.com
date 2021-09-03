// this file for everything relate to server.
import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Tour from "../../src/models/tourModel.js";
import User from "../../src/models/userModel.js";
import Review from "../../src/models/ReviewModel.js";

dotenv.config({
  path: "./../../config.env",
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log({ DB });

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const tours = JSON.parse(fs.readFileSync("tours.json", "utf-8"));
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
const reviews = JSON.parse(
  fs.readFileSync("reviews.json", "utf-8")
);

console.log({ tours, Tour });

const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log("data successfully loaded");
    process.exit();
  } catch (error) {
    console.log({ error });
  }
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log({ argv: process.argv });
