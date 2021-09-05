import React from "react";
import { Label, Text } from "../styledComps/iconWithTextSC";
import { UserImage } from "../styledComps/userNameAndImgSc";
import { TwoTexts } from "./tourDetails/TwoTexts";

export const UserNameAndImg = ({ image, name, type }) => {
  const twoTextsProps = {
    first: name,
    second: type,
    hasSecond: type,
  };

  return (
    <>
      <UserImage src={image} alt={`Photo of ${name}`} />
      {/* <TwoTexts {...twoTextsProps} /> */}

      {type ? (
        <>
          <Label> {type}</Label>
          <Text> {name}</Text>
        </>
      ) : (
        <span> {name}</span>
      )}
    </>
  );
};
