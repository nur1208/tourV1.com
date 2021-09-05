import React from "react";
import {
  CatImgImg,
  CatLogo,
} from "../../styledComps/tourDetails/catImageSC";

export const CatImage = () => {
  return (
    <>
      <CatLogo>
        <img src="/img/logo-white.png" alt="Natours logo" />
      </CatLogo>
      <CatImgImg
        isFirst={true}
        src="/img/tours/tour-2-2.jpg"
        alt="Tour picture"
      />
      <CatImgImg
        src="/img/tours/tour-2-3.jpg"
        alt="Tour picture"
      />
    </>
  );
};
