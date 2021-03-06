import React from "react";
import {
  RatingW,
  StarW,
} from "../../styledComps/tourDetails/ratingSC";

export const Rating = ({ rating }) => {
  return (
    <RatingW id="RatingW">
      {Array(5)
        .fill(true)
        .map((_, index) => (
          <StarW id="StarW" isActive={index + 1 <= rating}>
            <svg id="icon-star" viewBox="0 0 24 24">
              <title>star</title>
              <path d="M23 9c-0.1-0.4-0.4-0.6-0.8-0.7l-6.4-0.9-2.9-5.8c-0.3-0.7-1.5-0.7-1.8 0l-2.9 5.7-6.3 1c-0.4 0-0.7 0.3-0.9 0.7-0.1 0.4 0 0.8 0.3 1l4.6 4.5-1.1 6.4c-0.1 0.4 0.1 0.8 0.4 1s0.7 0.3 1.1 0.1l5.7-3 5.7 3c0.2 0 0.3 0 0.5 0s0.4-0.1 0.6-0.2c0.3-0.2 0.5-0.6 0.4-1l-1.1-6.4 4.6-4.5c0.3-0.2 0.4-0.6 0.3-0.9zM16.3 13.4c-0.2 0.3-0.3 0.6-0.3 0.9l0.8 4.9-4.4-2.3c-0.3-0.2-0.6-0.2-0.9 0l-4.4 2.3 0.9-4.9c0-0.3-0.1-0.6-0.3-0.9l-3.6-3.4 4.9-0.7c0.3 0 0.6-0.3 0.8-0.5l2.2-4.5 2.2 4.4c0.1 0.3 0.4 0.5 0.8 0.5l4.9 0.7-3.6 3.5z"></path>
            </svg>
          </StarW>
        ))}
    </RatingW>
  );
};
