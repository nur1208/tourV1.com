import React from "react";
import { TertiaryWrapper } from "../styledComps/headingTertiarySC";

export const HeadingTertiary = ({ text, isPrimary }) => {
  return (
    <TertiaryWrapper id="TertiaryWrapper" isPrimary={isPrimary}>
      <span>{text}</span>
    </TertiaryWrapper>
  );
};
