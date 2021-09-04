import React from "react";
import { IconWithText } from "../IconWithText";

export const IconWithTexts = () => {
  const icons = [
    {
      text: "Next date",
      Icon: (
        <svg id="icon-calendar" viewBox="0 0 24 24">
          <title>calendar</title>
          <path d="M19 3h-2v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-6v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-2c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-14c0-1.7-1.3-3-3-3zM5 5h2v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h6v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h2c0.6 0 1 0.4 1 1v3h-16v-3c0-0.6 0.4-1 1-1zM19 21h-14c-0.6 0-1-0.4-1-1v-9h16v9c0 0.6-0.4 1-1 1z"></path>
        </svg>
      ),
      secondText: "June 2021",

      isMRMore: true,
      hasMB: true,
    },

    {
      text: "Difficulty",
      Icon: (
        <svg id="icon-trending-up" viewBox="0 0 24 24">
          <title>trending-up</title>
          <path d="M23.9 5.6c-0.1-0.2-0.3-0.4-0.5-0.5-0.1-0.1-0.3-0.1-0.4-0.1h-6c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.6l-7.1 7.1-4.3-4.3c-0.4-0.4-1-0.4-1.4 0l-7.5 7.5c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6.8-6.8 4.3 4.3c0.4 0.4 1 0.4 1.4 0l7.8-7.8v3.6c0 0.6 0.4 1 1 1s1-0.4 1-1v-6c0-0.1 0-0.3-0.1-0.4z"></path>
        </svg>
      ),
      secondText: "Mean",

      isMRMore: true,
      hasMB: true,
    },
    {
      text: "Participants",
      Icon: (
        <svg id="icon-user" viewBox="0 0 24 24">
          <title>user</title>
          <path d="M16 14h-8c-2.8 0-5 2.2-5 5v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-2.8-2.2-5-5-5z"></path>
          <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM12 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"></path>
        </svg>
      ),
      secondText: "15 people",
      hasMB: true,
      isMRMore: true,
    },
    {
      text: "Rating",
      Icon: (
        <svg id="icon-star" viewBox="0 0 24 24">
          <title>star</title>
          <path d="M23 9c-0.1-0.4-0.4-0.6-0.8-0.7l-6.4-0.9-2.9-5.8c-0.3-0.7-1.5-0.7-1.8 0l-2.9 5.7-6.3 1c-0.4 0-0.7 0.3-0.9 0.7-0.1 0.4 0 0.8 0.3 1l4.6 4.5-1.1 6.4c-0.1 0.4 0.1 0.8 0.4 1s0.7 0.3 1.1 0.1l5.7-3 5.7 3c0.2 0 0.3 0 0.5 0s0.4-0.1 0.6-0.2c0.3-0.2 0.5-0.6 0.4-1l-1.1-6.4 4.6-4.5c0.3-0.2 0.4-0.6 0.3-0.9zM16.3 13.4c-0.2 0.3-0.3 0.6-0.3 0.9l0.8 4.9-4.4-2.3c-0.3-0.2-0.6-0.2-0.9 0l-4.4 2.3 0.9-4.9c0-0.3-0.1-0.6-0.3-0.9l-3.6-3.4 4.9-0.7c0.3 0 0.6-0.3 0.8-0.5l2.2-4.5 2.2 4.4c0.1 0.3 0.4 0.5 0.8 0.5l4.9 0.7-3.6 3.5z"></path>
        </svg>
      ),
      secondText: "4.8 / 5",
      isMRMore: true,

      hasMB: true,
    },
  ];

  return icons.map(({ Icon, ...item }, index) => (
    <IconWithText key={index} {...item}>
      {Icon}
    </IconWithText>
  ));
};
