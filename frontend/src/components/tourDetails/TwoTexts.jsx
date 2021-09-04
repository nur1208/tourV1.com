import React from "react";
import { Label, Text } from "../../styledComps/iconWithTextSC";

export const TwoTexts = ({ first, second, hasSecond }) => {
  return hasSecond ? (
    <>
      <Label> {first}</Label>
      <Text> {second}</Text>
    </>
  ) : (
    <span> {first}</span>
  );
};
