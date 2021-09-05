import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { FormGroupW } from "../styledComps/formGroupSC";
import { FormNotComp, FormW } from "../styledComps/formSc";
import { HeadingSecondary } from "../styledComps/tourDetails/overviewBoxGroupSC";
import { Button } from "./Button";
import { FormGroup } from "./FormGroup";

export const Form = ({
  fields,
  handleOnSubmit,
  title,
  btnText,
}) => {
  const buttonProps = {
    isGreen: true,
    text: btnText ? btnText : "Login",
    isV2: true,
  };

  return (
    <FormW id="FormW">
      <HeadingSecondary id="HeadingSecondary">
        {title}
      </HeadingSecondary>
      <FormNotComp id="FormNotComp">
        {fields.map((field) => (
          <FormGroup {...field} />
        ))}
        <FormGroupW>
          <Button {...buttonProps} onClick={handleOnSubmit} />
        </FormGroupW>
      </FormNotComp>
    </FormW>
  );
};
