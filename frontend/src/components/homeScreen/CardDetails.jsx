import React from "react";
import { CardDetailsWrapper } from "../../styledComps/homeScreen/cardDetailsSc";
import { IconWithText } from "../IconWithText";

export const CardDetails = () => {
  return (
    <CardDetailsWrapper id="CardDetailsWrapper">
      <h4>medium 7-day tour</h4>
      <p>
        Exploring the jaw-dropping US east coast by foot and by
        boat
      </p>
      <IconWithText />
    </CardDetailsWrapper>
  );
};
