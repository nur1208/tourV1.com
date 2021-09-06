import React from "react";
import { MeScreenW, UserView } from "../styledComps/meScreenSC";
import { UserViewContent } from "./meScreen/UserViewContent";
import { UserViewMenu } from "./meScreen/UserViewMenu";

export const MeScreen = () => {
  return (
    <MeScreenW>
      <UserView>
        <UserViewMenu />
        <UserViewContent />
      </UserView>
    </MeScreenW>
  );
};
