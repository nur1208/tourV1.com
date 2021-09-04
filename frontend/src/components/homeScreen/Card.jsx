import React from "react";
import {
  CardHeader,
  CardWrapper,
} from "../../styledComps/homeScreen/cardSc";
import { HeadingTertiary } from "../HeadingTertiary";
import { Image } from "../Image";
import { CardDetails } from "./CardDetails";
import { CardFooter } from "./CardFooter";

export const Card = ({
  name,
  imageCover,
  startLocation,
  startDates,
  locations,
  maxGroupSize,
  price,
  ratingsAverage,
  ratingsQuantity,
  slug,
}) => {
  const imageProps = { name, imageCover };
  const cardDetailsProps = {
    description: startLocation.description,
    startDate: startDates[0],
    stops: locations.length,
    maxGroupSize,
  };
  const cardFooterProps = {
    price,
    ratingsAverage,
    ratingsQuantity,
    slug,
  };
  return (
    <CardWrapper id="CardWrapper">
      <CardHeader id="CardHeader">
        <Image {...imageProps} />
        <HeadingTertiary text={name} />
      </CardHeader>
      <CardDetails {...cardDetailsProps} />
      <CardFooter {...cardFooterProps} />
    </CardWrapper>
  );
};
