import multer from "multer";
import sharp from "sharp";
import AppError from "../../utils/appError.js";
import catchAsync from "../../utils/catchAsync.js";
import Tour from "../models/tourModel.js";
// import image from "../dev-data/img/user-1.jpg";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

const multerStorage = multer.memoryStorage();

// we use multerFilter to check if the file image or not
// for security propose
// cb(error,value you want to pass)
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      new AppError("Not image! Please upload only images", 400),
      false
    );
  }
};

export const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// this will add files to the request object
// but upload file will add file to it
/**
 * uploadTourImages middleware is for letting users upload images for a tour using multer
 * - this middleware will add files to the req object. 
 */
export const uploadTourImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 3 },
]);

export const resizeTourImages = catchAsync(
  async (req, res, next) => {
    if (!req.files.imageCover || !req.files.images) return next();

    // Cover image
    const imageCoverFilename = `tour-${
      req.params.id
    }-${Date.now()}-cover.jpeg`;
    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`public/img/tours/${imageCoverFilename}`);

    req.body.imageCover = imageCoverFilename;
    // images
    req.body.images = [];

    await Promise.all(
      req.files.images.map(async (file, i) => {
        const filename = `tour-${req.params.id}-${Date.now()}-${
          i + 1
        }.jpeg`;

        await sharp(file.buffer)
          .resize(2000, 1333)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(`public/img/tours/${filename}`);

        req.body.images.push(filename);
      })
    );

    next();
  }
);

/**
 * aliasTopTours middleware is for adding the following query to the req object's query object:
 * - limit equals to 5, because we getting top 5 best cheapest tour
 * - sort = "-ratingsAverage, price", descending order for ratingsAverage (best) and ascending order for price (cheapest)
 * - fields = "name,price,ratingsAverage,summary,difficulty", select only the fields in the quotes.
 */
export const aliasTopTours = (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = "-ratingsAverage, price";
  req.query.fields =
    "name,price,ratingsAverage,summary,difficulty";
  next();
};

/**
 * getAllTours middleware which will call getAll Closure function
 * and passing Tour to it, to let it  know "get all documents for what model"
 */
export const getAllTours = getAll(Tour);

/**
 * getTour middleware which will call getOne Closure function
 * and passing Tour model and optional populate options to it, to let it  know "get document for what model"
 */
export const getTour = getOne(Tour, { path: `reviews` });


/**
 * createTour middleware which will call createOne Closure function
 * and passing Tour to it, to let it  know "create document for what model"
 */
export const createTour = createOne(Tour);
export const updateTour = updateOne(Tour);
export const deleteTour = deleteOne(Tour);

// export const deleteTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findByIdAndDelete(req.params.id);

//   if (!tour) {
//     return next(
//       new AppError(`No tour found with '${req.params.id}' ID`, 404)
//     );
//   }
//   // 204 means deleted
//   res.status(204).json({
//     status: "success",
//     data: { tour },
//   });
// });

/**
 * middleware of getting tour statistics that group by difficulty fields:
 *   - total number of tours
 *  - total number of rating for the tours
 *  - average number of Rating for the tours
 *  - average number of price for the tours
 *  - minimum number of price for the tours
 *  - maximum number of price for the tours
 * - and then sort them by average price
 */

export const getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    { $match: { ratingsAverage: { $gte: 4.5 } } },
    {
      $group: {
        // _id: "$ratingsAverage" ,

        _id: { $toUpper: "$difficulty" },
        num: { $sum: 1 },
        numRating: { $sum: "$ratingsQuantity" },
        avgRating: { $avg: "$ratingsAverage" },
        avgPrice: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    { $sort: { avgPrice: 1 } },
    // { $match: { _id: { $ne: "EASY" } } },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});

/**
 * getMonthlyPlan is middleware for get monthly play for specific year
 * - it will send  number of tours that will start for specific month and array of names of that tours
 */
export const getMonthlyPlan = catchAsync(
  async (req, res, next) => {
    const year = req.params.year * 1;

    const plan = await Tour.aggregate([
      {
        $unwind: "$startDates",
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$startDates" },
          numTourStarts: { $sum: 1 },
          tours: { $push: "$name" },
        },
      },
      { $sort: { numTourStarts: -1 } },
      { $addFields: { month: "$_id" } },
      {
        $project: {
          _id: 0,
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      data: {
        plan,
      },
    });
  }
);
// "/tours-within/:distance/center/:latLng/unit/:unit",

/**
 * middleware for getting tours within giving lat and leg points using monogdb $geoWithin operator
 */
export const getToursWithIn = catchAsync(
  async (req, res, next) => {
    const { distance, latLng, unit } = req.params;
    const [lat, lng] = latLng.split(",");

    if (!lat || !lng) {
      return next(
        new AppError(
          "Please provide lat and long in the format of lat,leg"
        )
      );
    }

    const radius =
      unit === "mi" ? distance / 3963.2 : distance / 6378.1;

    const tour = await Tour.find({
      startLocation: {
        $geoWithin: { $centerSphere: [[lng, lat], radius] },
      },
    });

    res.status(200).json({
      status: "success",
      resultLength: tour.length,
      data: { tour },
    });
  }
);

/**
 * getDistances is middleware for getting distances of giving points
 */
export const getDistances = catchAsync(async (req, res, next) => {
  const { latLng, unit } = req.params;
  const [lat, lng] = latLng.split(",");

  const multiplier = unit === "mi" ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    return next(
      new AppError(
        "Please provide lat and long in the format of lat,leg"
      )
    );
  }

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [lng * 1, lat * 1],
        },
        distanceField: "distance",
        distanceMultiplier: multiplier,
      },
    },
    { $project: { distance: 1, name: 1 } },
  ]);

  res.status(200).json({
    status: "success",
    data: { distances },
  });
});
