import APIFeatures from "../../utils/apiFeatures.js";
import AppError from "../../utils/appError.js";
import catchAsync from "../../utils/catchAsync.js";

export const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    // console.log({ Model });

    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError(
          `No document found with '${req.params.id}' ID`,
          404
        )
      );
    }
    // 204 means deleted
    res.status(204).json({
      status: "success",
      data: null,
    });
  });

export const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const updatedDoc = await Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDoc) {
      return next(
        new AppError(
          `No document found with '${req.params.id}' ID`,
          404
        )
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        updatedDoc,
      },
    });
  });

/**
 * - createOne function is Closure Function
 * - this function for factory our code.
 * - instead of writing createTour, createUser or createSomething code and then have lots of duplicate code
 * - createOne solved that problem by writing one implementation code for createTour or createUser and just passing Model of Tour or User to it.
 *
 * @param {mongoose.Model} Model
 * @returns {Function}
 */

export const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newDoc,
      },
    });
  });

/**
 * - getOne function is Closure Function
 * - this function for factory our code.
 * - instead of writing getTour, getUser or getSomething code and then have lots of duplicate code
 * - getOne solved that problem by writing one implementation code for getTour or getUser and by passing Model of Tour or User and  populate options to it.
 *
 * @param {mongoose.Model} Model
 * @param {Object} popOptions - it is optional
 * @returns {Function}
 */

export const getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    let query = Model.findById(id);

    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`No document found with '${id}' ID`, 404)
      );
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

/**
 * - getAll function is Closure Function
 * - this function for factory our code.
 * - instead of writing getAllTour, getAllUser or getAllSomething code and then have lots of duplicate code
 * - getAll solved that problem by writing one implementation code for getAllTour or getAllUser and just passing Model of Tour or User to it.
 * @param {mongoose.Model} Model
 * @returns {Function}
 */

// Closure Function
export const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    // build the query
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
    // execute the query

    const doc = await features.query; //.explain();

    // send the response
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: { doc },
    });
  });
