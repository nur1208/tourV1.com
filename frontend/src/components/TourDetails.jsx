import React, { useEffect, useState } from "react";
import { getTour } from "../sendHttpRequests/tours";
import {
  HeaderHero,
  HeaderHeroOverlay,
  TourDetailsW,
} from "../styledComps/tourDetails";
import { Image } from "./Image";
import { Cta } from "./tourDetails/Cta";
import { Description } from "./tourDetails/Description";
import { HeadingBox } from "./tourDetails/HeadingBox";
import { Images } from "./tourDetails/Images";
import { Map } from "./tourDetails/Map";
import { Reviews } from "./tourDetails/Reviews";

export const TourDetails = ({ match }) => {
  const [
    {
      name,
      duration,
      startLocation,
      startDates,
      difficulty,
      maxGroupSize,
      ratingsAverage,
      ratingsQuantity,
      guides,
      images,
      locations,
      _id,
    },
    setTour,
  ] = useState({});
  useEffect(() => {
    const main = async () => {
      const doc = await getTour(match.params.slug);
      setTour(doc);
    };
    main();
  }, [match]);

  const headingBoxProps = {
    name,
    duration,
    description: startLocation && startLocation.description,
  };

  const descriptionProps = {
    startAt: startDates && startDates[0],
    difficulty,
    maxGroupSize,
    ratingsAverage,
    ratingsQuantity,
    guides,
  };

  const imagesProps = { images };
  const mapProps = { locations };
  const reviewsProps = { _id };

  return (
    <>
      {/* Header */}
      <TourDetailsW id="TourDetailsW ">
        <HeaderHero id="HeaderHero">
          <HeaderHeroOverlay>&nbsp;</HeaderHeroOverlay>
          <img
            src="/img/tours/tour-2-cover.jpg"
            alt="The Sea Explorer"
          />
        </HeaderHero>
        <HeadingBox {...headingBoxProps} />
      </TourDetailsW>
      <Description {...descriptionProps} />
      <Images {...imagesProps} />
      <Map {...mapProps} />
      <Reviews {...reviewsProps} />
      <Cta />
    </>
  );
};
