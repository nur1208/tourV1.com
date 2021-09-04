import React from "react";
import {
  HeaderHero,
  HeaderHeroOverlay,
  TourDetailsW,
} from "../styledComps/tourDetails";
import { Image } from "./Image";
import { Description } from "./tourDetails/Description";
import { HeadingBox } from "./tourDetails/HeadingBox";
import { Images } from "./tourDetails/Images";
import { Map } from "./tourDetails/Map";

export const TourDetails = () => {
  const imageProps = {
    name: "The Sea Explorer",
    imageCover: "tour-2-cover.jpg",
  };

  return (
    <>
      {/* Header */}
      <TourDetailsW id="TourDetailsW ">
        <HeaderHero id="HeaderHero">
          {/* <Image {...imageProps} /> */}
          <HeaderHeroOverlay>&nbsp;</HeaderHeroOverlay>
          <img
            src="/img/tours/tour-2-cover.jpg"
            alt="The Sea Explorer"
          />
        </HeaderHero>
        <HeadingBox />
      </TourDetailsW>
      <Description />
      <Images />
      <Map />
    </>
  );
};
