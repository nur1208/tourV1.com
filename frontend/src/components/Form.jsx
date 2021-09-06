import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import {
  FormGroupW,
  FormPhotoUpload,
  FormUpload,
  FormUserPhoto,
} from "../styledComps/formGroupSC";
import { FormNotComp, FormW } from "../styledComps/formSc";
import { HeadingSecondary } from "../styledComps/tourDetails/overviewBoxGroupSC";
import { Button } from "./Button";
import { FormGroup } from "./FormGroup";

export const Form = ({
  fields,
  handleOnSubmit,
  title,
  btnText,
  isUserView,
  isBtnRight,
  hasUpload,
}) => {
  const buttonProps = {
    isGreen: true,
    text: btnText ? btnText : "Login",
    isV2: true,
  };

  const formW = { isUserView };
  const formGroupWProp = { isBtnRight };
  return (
    <FormW id="FormW" {...formW}>
      <HeadingSecondary id="HeadingSecondary">
        {title}
      </HeadingSecondary>
      <FormNotComp id="FormNotComp">
        {fields.map((field) => (
          <FormGroup {...field} />
        ))}
        {hasUpload && (
          <FormPhotoUpload>
            <FormUserPhoto
              id="FormUserPhoto"
              src="/img/users/user-4.jpg"
              alt="User photo"
            />
            <FormUpload />
            <label for="photo">Choose new photo</label>
          </FormPhotoUpload>
        )}

        <FormGroupW id="FormGroupW" {...formGroupWProp}>
          <Button {...buttonProps} onClick={handleOnSubmit} />
        </FormGroupW>
      </FormNotComp>
    </FormW>
  );
};
