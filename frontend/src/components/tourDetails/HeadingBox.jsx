import React from "react";
import { HeadingBoxGroup } from "../../styledComps/tourDetails";
import { HeadingBoxW } from "../../styledComps/tourDetails/headingBoxSc";
import { HeadingTertiary } from "../HeadingTertiary";
import { IconWithText } from "../IconWithText";

export const HeadingBox = () => {
  const headingTertiary = {
    text: "The Sea Explorer tour",
    isPrimary: true,
  };

  const icons = [
    {
      text: "7 days",
      Icon: (
        <svg id="icon-clock" viewBox="0 0 24 24">
          <title>clock</title>
          <path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z"></path>
          <path d="M16.4 13.1l-3.4-1.7v-5.4c0-0.6-0.4-1-1-1s-1 0.4-1 1v6c0 0.4 0.2 0.7 0.6 0.9l4 2c0.1 0.1 0.2 0.1 0.4 0.1 0.4 0 0.7-0.2 0.9-0.6s0-1-0.5-1.3z"></path>
        </svg>
      ),
      isBig: true,
      isIconWhite: true,
    },
    {
      text: "Miami, USA",
      Icon: (
        <svg id="icon-map-pin" viewBox="0 0 24 24">
          <title>map-pin</title>
          <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"></path>
          <path d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 12c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z"></path>
        </svg>
      ),
      isBig: true,
      isIconWhite: true,
    },
  ];

  return (
    <HeadingBoxW id="HeadingBoxW">
      <HeadingTertiary {...headingTertiary} />
      {/* <HeadingPrimary>The Sea Explorer tour</HeadingPrimary> */}
      <HeadingBoxGroup>
        {icons.map(({ Icon, ...props }) => (
          <IconWithText {...props}>{Icon}</IconWithText>
        ))}
      </HeadingBoxGroup>
    </HeadingBoxW>
  );
};
