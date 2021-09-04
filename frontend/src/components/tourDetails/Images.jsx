import React from "react";
import {
  ImageBox,
  ImagesWrapper,
} from "../../styledComps/tourDetails/imagesSC";

export const Images = () => {
  return (
    <ImagesWrapper id="ImagesWrapper">
      <div>
        <ImageBox
          src="/img/tours/tour-2-1.jpg"
          alt="The Park Camper Tour 1"
          style={{ paddingTop: "15%" }}
        />
      </div>
      <div>
        <ImageBox
          src="/img/tours/tour-2-2.jpg"
          alt="The Park Camper Tour 2"
          style={{ paddingTop: "15%" }}
        />
      </div>
      <div>
        <ImageBox
          src="/img/tours/tour-2-3.jpg"
          alt="The Park Camper Tour 3"
          style={{ paddingTop: "15%" }}
        />
      </div>
    </ImagesWrapper>
  );
};
