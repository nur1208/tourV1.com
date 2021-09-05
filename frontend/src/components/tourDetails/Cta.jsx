import React from "react";
import {
  CatInnerW,
  CatW,
} from "../../styledComps/tourDetails/catSC";
import { CatImage } from "./CatImage";
import { CtaContent } from "./CtaContent";

export const Cta = () => {
  return (
    <CatW>
      <CatInnerW>
        <CatImage />
        <CtaContent />
      </CatInnerW>
    </CatW>
  );
};
