import React from "react";
import {
  Container,
  Ratings,
  Text,
  Value,
} from "../../styledComps/homeScreen/cardFooterSC";
import { Button } from "../Button";

export const CardFooter = () => {
  const ButtonProps = {
    isGreen: true,
    isSmall: true,
    text: "Details",
    isV2: true,
  };
  return (
    <Container>
      <p>
        <Value>$497</Value>
        <Text> per person</Text>
      </p>

      <Ratings>
        <Value>4.8</Value>
        <Text> rating (6)</Text>
      </Ratings>

      <Button {...ButtonProps} />
    </Container>
  );
};
