import React from "react";
import {
  DescriptionW,
  OverviewBox,
} from "../../styledComps/tourDetails/descriptionSC";
import { OverviewBoxGroup } from "../../styledComps/tourDetails/OverviewBoxGroup";
import { DescriptionBox } from "./DescriptionBox";
import { IconWithTexts } from "./IconWithTexts";
import { YourGuides } from "./YourGuides";
const overviewBoxGroupProps1 = { title: "Quick facts" };
const overviewBoxGroupProps2 = { title: "Your tour guides" };
const overviewBoxGroupProps3 = {
  title: "About The Sea Explorer tour",
};
export const Description = () => {
  return (
    <DescriptionW id="DescriptionW">
      <OverviewBox id="OverviewBox">
        <div>
          <OverviewBoxGroup {...overviewBoxGroupProps1}>
            <IconWithTexts />
          </OverviewBoxGroup>
          <OverviewBoxGroup {...overviewBoxGroupProps2}>
            {/* <IconWithTexts /> */}
            <YourGuides />
          </OverviewBoxGroup>
        </div>
      </OverviewBox>

      <OverviewBoxGroup {...overviewBoxGroupProps3}>
        <DescriptionBox />
      </OverviewBoxGroup>
    </DescriptionW>
  );
};
