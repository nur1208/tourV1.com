import React, { useState } from "react";
import { Form } from "../Form";

export const UpdateSettingsForm = () => {
  const [name, setName] = useState("Ayla Cornell");
  const [email, setEmail] = useState("ayls@example.com");
  // const [{ isLoggedIn }, dispatch] = useReducer(
  //   userReducer,
  //   userInitialState
  // );

  //   const { dispatch } = useContext(Application);

  const handleOnSubmit = async () => {
    // const isLoggedIn = await login(email, password);
    // console.log({ isLoggedIn });
    // setTours(doc);
    // if (isLoggedIn) {
    //   dispatch({ type: USER_LOGGED_IN });
    //   history.push("/");
    // }
  };
  const fields = [
    {
      label: "Name",
      type: "text",
      id: "name",
      isRequired: true,
      //   placeholder: "you@example.com",
      value: name,
      setValue: setName,
    },

    {
      label: "Email address",
      id: "email",
      type: "email",
      isRequired: true,
      //   placeholder: "••••••••",
      //   minLength: 8,
      value: email,
      setValue: setEmail,
    },
  ];

  const formProps = {
    fields,
    handleOnSubmit,
    title: "Your account settings",
    isUserView: true,
    isBtnRight: true,
    btnText: "Save settings",
    hasUpload: true,
  };

  return <Form {...formProps} />;
};
