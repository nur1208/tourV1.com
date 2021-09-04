import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Ratings,
  Text,
  Value,
} from "../../styledComps/homeScreen/cardFooterSC";
import { Button } from "../Button";

export const CardFooter = ({
  price,
  ratingsAverage,
  ratingsQuantity,
  slug,
}) => {
  const ButtonProps = {
    isGreen: true,
    isSmall: true,
    text: "Details",
    isV2: true,
    to: `/${slug}`,
  };
  return (
    <Container>
      <p>
        <Value>${price}</Value>
        <Text> per person</Text>
      </p>

      <Ratings>
        <Value>{ratingsAverage}</Value>
        <Text> rating ({ratingsQuantity})</Text>
      </Ratings>
      <Button {...ButtonProps} />
    </Container>
  );
};
