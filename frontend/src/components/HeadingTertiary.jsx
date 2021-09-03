import React from "react";
import { TertiaryWrapper } from "../styledComps/headingTertiarySC";

export const HeadingTertiary = ({ text }) => {
  return (
    <TertiaryWrapper id="TertiaryWrapper">
      <span>{text}</span>
    </TertiaryWrapper>
  );
};
