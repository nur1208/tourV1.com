import React, { useEffect, useState } from "react";
import { SettingsIcon } from "../../styledComps/meScreen/SettingsIcon";
import {
  SideNav,
  UserViewMenuW,
} from "../../styledComps/meScreen/userViewMenuSc";
import { BriefcaseIcon } from "./BriefcaseIcon";
import { CreditCardIcon } from "./CreditCardIcon";
import { StarIcon } from "./StarIcon";
import { UserViewMenuItem } from "./UserViewMenuItem";

export const UserViewMenu = () => {
  const menuItems = [
    { icon: <SettingsIcon />, text: "settings" },
    { icon: <BriefcaseIcon />, text: "My bookings" },
    { icon: <StarIcon />, text: "My reviews" },
    { icon: <CreditCardIcon />, text: "Billing" },
  ];

  const [isActives, setIsActives] = useState(
    Array(menuItems.length).fill(false)
  );

  useEffect(() => {
    setIsActives(isActives.map((_, index) => index === 0));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleActiveItem = (index) => {
    // console.log({ index });
    setIsActives(
      isActives.map((_, itemIndex) => itemIndex === index)
    );
  };

  return (
    <UserViewMenuW id="UserViewMenuW">
      <SideNav id="SideNav">
        {menuItems.map(({ icon, ...item }, index) => (
          <UserViewMenuItem
            {...item}
            isActive={isActives[index]}
            key={index}
            index={index}
            handleActiveItem={handleActiveItem}
          >
            {icon}
          </UserViewMenuItem>
        ))}
      </SideNav>
    </UserViewMenuW>
  );
};
