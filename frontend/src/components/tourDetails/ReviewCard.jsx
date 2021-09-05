import React from "react";
import {
  ReviewCardW,
  ReviewText,
} from "../../styledComps/tourDetails/reviewCard";
import { OverviewBoxDetail } from "../../styledComps/tourDetails/yourGuidesSC";
import { UserNameAndImg } from "../UserNameAndImg";
import { Rating } from "./Rating";

export const ReviewCard = () => {
  const userNameAndImgProps = {
    name: "Lourdes Browning",
    image: "/img/users/user-2.jpg",
  };
  return (
    <ReviewCardW>
      <OverviewBoxDetail id="OverviewBoxDetail">
        <UserNameAndImg {...userNameAndImgProps} />
      </OverviewBoxDetail>
      <ReviewText>
        Cras mollis nisi parturient mi nec aliquet suspendisse
        sagittis eros condimentum scelerisque taciti mattis
        praesent feugiat eu nascetur a tincidunt
      </ReviewText>
      <Rating />
    </ReviewCardW>
  );
};
