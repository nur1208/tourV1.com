import React from "react";
import {
  CardHeader,
  CardWrapper,
} from "../../styledComps/homeScreen/cardSc";
import { HeadingTertiary } from "../HeadingTertiary";
import { Image } from "../Image";
import { CardDetails } from "./CardDetails";
import { CardFooter } from "./CardFooter";

export const Card = () => {
  return (
    <CardWrapper id="CardWrapper">
      <CardHeader id="CardHeader">
        <Image />
        <HeadingTertiary text="The Sea Explorer" />
      </CardHeader>
      <CardDetails />
      <CardFooter />
    </CardWrapper>
  );
};
