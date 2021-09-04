import React from "react";
import { ImageWrapper, Overlay } from "../styledComps/imageSC";

export const Image = ({ name, imageCover }) => {
  return (
    <ImageWrapper id="ImageWrapper">
      <Overlay id="Overlay">&nbsp;</Overlay>
      <img src={`/img/tours/${imageCover}`} alt={name} />
    </ImageWrapper>
  );
};
