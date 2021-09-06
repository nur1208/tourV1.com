import React, { useState } from "react";
import { Form } from "../Form";

export const UpdatePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState(
    "ayls@example.com"
  );

  const [confirmPassword, setConfirmPassword] = useState("");
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
      label: "Current password",
      type: "password",
      id: "password-current",
      isRequired: true,
      placeholder: "••••••••",
      value: currentPassword,
      minLength: 8,
      setValue: setCurrentPassword,
    },

    {
      label: "New password",
      id: "password",
      type: "password",
      isRequired: true,
      placeholder: "••••••••",
      minLength: 8,
      value: newPassword,
      setValue: setNewPassword,
    },

    {
      label: "Confirm password",
      id: "password-confirm",
      type: "password",
      isRequired: true,
      placeholder: "••••••••",
      minLength: 8,
      value: confirmPassword,
      setValue: setConfirmPassword,
    },
  ];

  const formProps = {
    fields,
    handleOnSubmit,
    title: "Password change",
    isUserView: true,
    isBtnRight: true,
    btnText: "Save password",
  };

  return <Form {...formProps} />;
};
