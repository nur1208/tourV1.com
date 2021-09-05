import React, { useEffect, useState } from "react";
import { getTourAllReviews } from "../../sendHttpRequests/tours";
import {
  ReviewsInnerW,
  ReviewsW,
} from "../../styledComps/tourDetails/reviewsSC";
import { ReviewCard } from "./ReviewCard";

export const Reviews = ({ _id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (_id) {
      const main = async () => {
        const doc = await getTourAllReviews(_id);
        setReviews(doc);
      };
      main();
    }
  }, [_id]);
  return (
    <ReviewsW>
      <ReviewsInnerW>
        {reviews.map(({ _id, ...review }) => (
          <ReviewCard {...review} key={_id} />
        ))}
      </ReviewsInnerW>
    </ReviewsW>
  );
};
