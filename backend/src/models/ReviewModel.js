import mongoose from "mongoose";
import Tour from "./tourModel.js";

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: [true, "Review must belong to a tour"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });

  // this.populate({
  //   path: "tour",
  //   select: "name]",
  // });
  next();
});

reviewSchema.statics.calcAverageRating = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: "$tour",
        numRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsAverage: stats[0].avgRating,
      ratingsQuantity: stats[0].numRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
    });
  }
};

// after the document has save in the database
// do the calculation
// post doesn't have access to next()
// because next to what we already save the data
// the request-response cycle is over.
reviewSchema.post("save", function () {
  // this point to the current review document object
  // this.constructor is like Review model
  // and this is like review instance
  this.constructor.calcAverageRating(this.tour);
});

//findOneAndUpdate
//findOneAndDelete
// this is how we can access the document object
// inside query middleware
// reviewSchema.pre(/^findOneAnd/, async function (next) {
//   this.currentDocument = await this.findOne({}); // return the current document object a send the current to the post middleware
//   // because we want to save the update data not the non-update data

//   next();
// });
// reviewSchema.post(/^findOneAnd/, async function () {
//   // this.constructor.calcAverageRating(this.tour);
//   await this.currentDocument.constructor.calcAverageRating(
//     this.currentDocument.tour
//   );
// });

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.rev = await this.findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  // await this.findOne(); does NOT work here, query has already executed

  await this.rev.constructor.calcAverageRating(this.rev.tour);
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
