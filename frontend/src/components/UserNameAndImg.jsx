import React from "react";
import { UserImage } from "../styledComps/userNameAndImgSc";

export const UserNameAndImg = ({ image, name }) => {
  return (
    <>
      <UserImage src={image} alt="Photo of Ayla Cornell" />
      <span>{name}</span>
    </>
  );
};
