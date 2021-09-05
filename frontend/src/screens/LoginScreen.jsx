import React, { useContext, useReducer, useState } from "react";
import { Form } from "../components/Form";
import userReducer, {
  Application,
  userInitialState,
  USER_LOGGED_IN,
} from "../reducers/userReducer";
import { login } from "../sendHttpRequests/auth";
import { LoginScreenW } from "../styledComps/loginScreenSC";

export const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [{ isLoggedIn }, dispatch] = useReducer(
  //   userReducer,
  //   userInitialState
  // );

  const { dispatch } = useContext(Application);

  const handleOnSubmit = async () => {
    const isLoggedIn = await login(email, password);

    // console.log({ isLoggedIn });
    // setTours(doc);
    if (isLoggedIn) {
      dispatch({ type: USER_LOGGED_IN });

      history.push("/");
    }
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
