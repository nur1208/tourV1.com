import React, { useState } from "react";
import { Form } from "../components/Form";
import { LoginScreenW } from "../styledComps/loginScreenSC";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {
    console.log({ email, password });
  };
  const fields = [
    {
      label: "Email Address",
      type: "email",
      isRequired: true,
      placeholder: "you@example.com",
      value: email,
      setValue: setEmail,
    },

    {
      label: "Password",
      type: "password",
      isRequired: true,
      placeholder: "••••••••",
      minLength: 8,
      value: password,
      setValue: setPassword,
    },
  ];

  const formProps = { fields, handleOnSubmit };

  return (
    <LoginScreenW id="LoginScreenW">
      <Form {...formProps} />
    </LoginScreenW>
  );
};
