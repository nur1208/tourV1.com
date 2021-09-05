import React from "react";
import {
  ImageBox,
  ImagesWrapper,
} from "../../styledComps/tourDetails/imagesSC";

export const Images = ({ images }) => {
  return (
    <ImagesWrapper id="ImagesWrapper">
      <div>
        <ImageBox
          src={`/img/tours/${images && images[0]}`}
          alt="The Park Camper Tour 1"
          style={{ paddingTop: "15%" }}
        />
      </div>
      <div>
        <ImageBox
          src={`/img/tours/${images && images[1]}`}
          alt="The Park Camper Tour 2"
          style={{ paddingTop: "15%" }}
        />
      </div>
      <div>
        <ImageBox
          src={`/img/tours/${images && images[2]}`}
          alt="The Park Camper Tour 3"
          style={{ paddingTop: "15%" }}
        />
      </div>
    </ImagesWrapper>
  );
};
