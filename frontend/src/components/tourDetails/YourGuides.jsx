import React from "react";
import { OverviewBoxDetail } from "../../styledComps/tourDetails/yourGuidesSC";
import { UserNameAndImg } from "../UserNameAndImg";

export const YourGuides = ({ guides }) => {
  const getGuideTypeReadable = (type) => {
    if (type === "lead-guide") return "LEAD GUIDE";
    else if (type === "guide") return "TOUR GUIDE";
    return "";
  };
  return (
    <>
      {guides &&
        guides.map(({ name, photo, _id, role }) => {
          const userNameAndImgProps = {
            name,
            type: getGuideTypeReadable(role),
            image: `/img/users/${photo}`,
          };

          return (
            <OverviewBoxDetail id="OverviewBoxDetail" key={_id}>
              <UserNameAndImg {...userNameAndImgProps} />
            </OverviewBoxDetail>
          );
        })}
      {/* <OverviewBoxDetail id="OverviewBoxDetail">
        <UserNameAndImg {...userNameAndImgProps} />
      </OverviewBoxDetail>
      <OverviewBoxDetail id="OverviewBoxDetail">
        <UserNameAndImg {...userNameAndImgProps} />
      </OverviewBoxDetail> */}
    </>
  );
};
