import React from "react";
import { OverviewBoxDetail } from "../../styledComps/tourDetails/yourGuidesSC";
import { UserNameAndImg } from "../UserNameAndImg";

export const YourGuides = () => {
  const userNameAndImgProps = {
    name: "Miyah Myles",
    type: "Lead guide",
    image: "/img/users/user-12.jpg",
  };
  return (
    <>
      <OverviewBoxDetail id="OverviewBoxDetail">
        <UserNameAndImg {...userNameAndImgProps} />
      </OverviewBoxDetail>
      <OverviewBoxDetail id="OverviewBoxDetail">
        <UserNameAndImg {...userNameAndImgProps} />
      </OverviewBoxDetail>
    </>
  );
};
