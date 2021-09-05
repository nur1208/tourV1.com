import React from "react";
import {
  FormGroupW,
  FormInput,
  FormLabel,
} from "../styledComps/formGroupSC";

export const FormGroup = ({
  label,
  type,
  isRequired,
  placeholder,
  minLength,
  value,
  setValue,
  id,
}) => {
  const formInputProps = {
    id,
    type,
    placeholder,
    value,
    required: isRequired,
    minLength,
    onChange: (e) => setValue(e.target.value),
  };
  return (
    <FormGroupW id="FormGroupW">
      <FormLabel id="FormLabel" for={id}>
        {label}
      </FormLabel>
      <FormInput id="FormInput" {...formInputProps} />
    </FormGroupW>
  );
};
