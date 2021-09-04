import React from "react";
import {
  Container,
  Label,
  Text,
} from "../styledComps/iconWithTextSC";
import { TwoTexts } from "./tourDetails/TwoTexts";

export const IconWithText = ({
  children,
  text,
  isBig,
  isIconWhite,
  secondText,
  hasMB,
  isMRMore,
}) => {
  const containerProps = { isBig, hasMB, isMRMore };
  const twoTextsProps = {
    first: text,
    second: secondText,
    hasSecond: secondText,
  };
  return (
    <Container id="Container" {...containerProps}>
      {/* <Icon style={{ height: 2, width: 2, fill: "#55c57a" }} /> */}
      {/* <svg
        id="icon-map-pin"
        viewBox="0 0 24 24"
        style={{ height: "2rem", width: "2rem", fill: "#55c57a" }}
      >
        <title>map-pin</title>
        <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"></path>
        <path d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 12c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z"></path>
      </svg> */}

      {React.cloneElement(children, {
        style: isIconWhite
          ? {
              height: "2rem",
              width: " 2rem",
              fill: "currentColor",
              filter:
                "drop-shadow(0 0.75rem 0.5rem rgba(0, 0, 0, 0.25))",
            }
          : { height: "2rem", width: "2rem", fill: "#55c57a" },
      })}
      <TwoTexts {...twoTextsProps} />
    </Container>
  );
};
