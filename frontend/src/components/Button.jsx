import React from "react";
import {
  BtnContainer,
  BtnContainerV2,
} from "../styledComps/buttonSC";

export const Button = (props) => {
  return props.isV2 ? (
    <BtnContainerV2 to={props.to} id="BtnContainer" {...props}>
      {props.text || "Sign up"}
    </BtnContainerV2>
  ) : (
    <BtnContainer id="BtnContainer" {...props}>
      {props.text || "Sign up"}
    </BtnContainer>
  );
};
