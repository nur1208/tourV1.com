import React, { useState } from "react";
import { Form } from "../Form";
import axios from "axios";

export const UpdateSettingsForm = () => {
  const [name, setName] = useState("Ayla Cornell");
  const [email, setEmail] = useState("ayls@example.com");
  const [selectedFile, setSelectedFileFile] = useState({});
  // const [{ isLoggedIn }, dispatch] = useReducer(
  //   userReducer,
  //   userInitialState
  // );

  //   const { dispatch } = useContext(Application);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log({ file: selectedFile });

    const formData = new FormData();
    formData.append("email", "nena@nena.com");
    formData.append("name", name);
    formData.append("photo", selectedFile);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzQ4NzdmZjY0Y2YyM2MyODczNzE3YiIsImlhdCI6MTYzMDkxMDE1MywiZXhwIjoxNjM4NTk5NzUzfQ.aByVLu1q8H79FArKLjtyfwj9nzyr6OdGa8uOFQXiVKs",
      },
    };
    const { data } = await axios.patch(
      "http://127.0.0.1:5000/api/v1/users/updateMe",
      formData,
      config
    );

    console.log({ data });

    // const isLoggedIn = await login(email, password);
    // console.log({ isLoggedIn });
    // setTours(doc);
    // if (isLoggedIn) {
    //   dispatch({ type: USER_LOGGED_IN });
    //   history.push("/");
    // }
  };

  const handleUploadImage = (event) => {
    // console.log({ file:  });
    setSelectedFileFile(event.target.files[0]);
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
    handleUploadImage,
  };

  return <Form {...formProps} />;
};
