import React, { useState } from "react";
import {
  Line,
  UserViewContentW,
} from "../../styledComps/meScreen/userViewContentSC";
import { UpdatePasswordForm } from "./UpdatePasswordForm";
import { UpdateSettingsForm } from "./UpdateSettingsForm";

export const UserViewContent = () => {
  return (
    <UserViewContentW id="UserViewContentW">
      <UpdateSettingsForm />
      <Line id="Line" />
      <UpdatePasswordForm />
    </UserViewContentW>
  );
};
