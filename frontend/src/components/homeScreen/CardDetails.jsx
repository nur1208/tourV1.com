import React from "react";
import { CardDetailsWrapper } from "../../styledComps/homeScreen/cardDetailsSc";
import { IconWithText } from "../IconWithText";

export const CardDetails = () => {
  const IconWithTexts = [
    {
      text: " Miami, USA",
      Icon: (
        <svg id="icon-map-pin" viewBox="0 0 24 24">
          <title>map-pin</title>
          <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"></path>
          <path d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 12c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z"></path>
        </svg>
      ),
    },
    {
      text: " June 2021",
      Icon: (
        <svg id="icon-calendar" viewBox="0 0 24 24">
          <title>calendar</title>
          <path d="M19 3h-2v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-6v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-2c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-14c0-1.7-1.3-3-3-3zM5 5h2v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h6v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h2c0.6 0 1 0.4 1 1v3h-16v-3c0-0.6 0.4-1 1-1zM19 21h-14c-0.6 0-1-0.4-1-1v-9h16v9c0 0.6-0.4 1-1 1z"></path>
        </svg>
      ),
    },

    {
      text: "4 stops",
      Icon: (
        <svg id="icon-flag" viewBox="0 0 24 24">
          <title>flag</title>
          <path d="M20.4 2.1c-0.4-0.2-0.8-0.1-1.1 0.2 0 0-0.9 0.7-3.3 0.7-1.3 0-2.4-0.5-3.6-0.9-1.3-0.6-2.7-1.1-4.4-1.1-3.2 0-4.5 1.1-4.7 1.3s-0.3 0.4-0.3 0.7v19c0 0.6 0.4 1 1 1s1-0.4 1-1v-6.5c0.4-0.2 1.4-0.5 3-0.5 1.3 0 2.4 0.5 3.6 0.9 1.3 0.5 2.7 1.1 4.4 1.1 3.2 0 4.5-1.1 4.7-1.3s0.3-0.4 0.3-0.7v-12c0-0.4-0.2-0.7-0.6-0.9zM19 14.5c-0.4 0.2-1.4 0.5-3 0.5-1.3 0-2.4-0.5-3.6-0.9-1.3-0.6-2.7-1.1-4.4-1.1-1.3 0-2.3 0.2-3 0.4v-9.9c0.4-0.2 1.4-0.5 3-0.5 1.3 0 2.4 0.5 3.6 0.9 1.3 0.6 2.7 1.1 4.4 1.1 1.3 0 2.3-0.2 3-0.4v9.9z"></path>
        </svg>
      ),
    },
    {
      text: "15 people",
      Icon: (
        <svg id="icon-user" viewBox="0 0 24 24">
          <title>user</title>
          <path d="M16 14h-8c-2.8 0-5 2.2-5 5v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-2.8-2.2-5-5-5z"></path>
          <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM12 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"></path>
        </svg>
      ),
    },
  ];
  return (
    <CardDetailsWrapper id="CardDetailsWrapper">
      <h4>medium 7-day tour</h4>
      <p>
        Exploring the jaw-dropping US east coast by foot and by
        boat
      </p>
      {IconWithTexts.map(({ text, Icon }) => (
        <IconWithText text={text}>{Icon}</IconWithText>
      ))}
    </CardDetailsWrapper>
  );
};
