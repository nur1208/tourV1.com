import React from "react";
import { ImageWrapper, Overlay } from "../styledComps/imageSC";

export const Image = () => {
  return (
    <ImageWrapper id="ImageWrapper">
      <Overlay id="Overlay">&nbsp;</Overlay>
      <img
        src="/img/tours/tour-2-cover.jpg"
        alt="The Sea Explorer"
      />
    </ImageWrapper>
  );
};
