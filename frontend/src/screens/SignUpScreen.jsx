import React, { useContext, useState } from "react";
import { Form } from "../components/Form";
import {
  Application,
  USER_LOGGED_IN,
} from "../reducers/userReducer";
import { signUp } from "../sendHttpRequests/auth";
import { LoginScreenW } from "../styledComps/loginScreenSC";

export const SignUpScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // const [{ isLoggedIn }, dispatch] = useReducer(
  //   userReducer,
  //   userInitialState
  // );

  const { dispatch } = useContext(Application);

  const handleOnSubmit = async () => {
    const isLoggedIn = await signUp({
      name,
      email,
      password,
      passwordConfirm,
    });
    // console.log({ isLoggedIn });
    // setTours(doc);
    if (isLoggedIn) {
      dispatch({ type: USER_LOGGED_IN });
      history.push("/");
    }
  };
  const fields = [
    {
      label: "Your name",
      type: "text",
      id: "name",
      isRequired: true,
      placeholder: "you@example.com",
      value: name,
      setValue: setName,
    },

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

    {
      label: "Password",
      type: "password",
      id: "passwordConfirm",
      isRequired: true,
      placeholder: "••••••••",
      minLength: 8,
      value: passwordConfirm,
      setValue: setPasswordConfirm,
    },
  ];

  const formProps = {
    fields,
    handleOnSubmit,
    title: "Create your account!",
    btnText: "Sign up",
  };

  return (
    <LoginScreenW id="LoginScreenW">
      <Form {...formProps} />
    </LoginScreenW>
  );
};
