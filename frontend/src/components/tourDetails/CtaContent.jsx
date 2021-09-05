import React from "react";
import {
  CtaContentW,
  CtaText,
} from "../../styledComps/tourDetails/ctaContent";
import { HeadingSecondary } from "../../styledComps/tourDetails/overviewBoxGroupSC";
import { Button } from "../Button";

export const CtaContent = () => {
  const buttonProps = {
    isV2: true,
    isGreen: true,
    text: "Log in to book tour",
  };
  return (
    <CtaContentW id="CtaContentW">
      <HeadingSecondary id="HeadingSecondary">
        What are you waiting for?
      </HeadingSecondary>
      <CtaText id="CtaText">
        7 days. 1 adventure. Infinite memories. Make it yours
        today!
      </CtaText>
      <Button {...buttonProps} />
    </CtaContentW>
  );
};
