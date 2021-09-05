import React from "react";
import {
  ReviewCardW,
  ReviewText,
} from "../../styledComps/tourDetails/reviewCard";
import { OverviewBoxDetail } from "../../styledComps/tourDetails/yourGuidesSC";
import { UserNameAndImg } from "../UserNameAndImg";
import { Rating } from "./Rating";

export const ReviewCard = ({ review, rating, user }) => {
  const userNameAndImgProps = {
    name: user.name,
    image: `/img/users/${user.photo}`,
  };
  const ratingProps = { rating };
  return (
    <ReviewCardW>
      <OverviewBoxDetail id="OverviewBoxDetail">
        <UserNameAndImg {...userNameAndImgProps} />
      </OverviewBoxDetail>
      <ReviewText>{review}</ReviewText>
      <Rating {...ratingProps} />
    </ReviewCardW>
  );
};
