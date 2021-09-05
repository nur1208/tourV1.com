import React from "react";
import {
  ReviewsInnerW,
  ReviewsW,
} from "../../styledComps/tourDetails/reviewsSC";
import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
  return (
    <ReviewsW>
      <ReviewsInnerW>
        <ReviewCard />
        <ReviewCard />
      </ReviewsInnerW>
    </ReviewsW>
  );
};
