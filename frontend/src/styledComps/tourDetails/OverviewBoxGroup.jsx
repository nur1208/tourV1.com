import React from "react";
import { IconWithText } from "../../components/IconWithText";
import { IconWithTexts } from "../../components/tourDetails/IconWithTexts";
import {
  HeadingSecondary,
  OverviewBoxGroupW,
} from "./overviewBoxGroupSC";

export const OverviewBoxGroup = ({ title, children }) => {
  return (
    <OverviewBoxGroupW id="OverviewBoxGroupW">
      <HeadingSecondary id="HeadingSecondary">
        {title}
      </HeadingSecondary>
      {children}
    </OverviewBoxGroupW>
  );
};
