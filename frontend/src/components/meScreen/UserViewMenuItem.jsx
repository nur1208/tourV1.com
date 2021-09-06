import React from "react";
import { Link } from "react-router-dom";
import { UserViewMenuItemW } from "../../styledComps/meScreen/userViewMenuItem";

export const UserViewMenuItem = ({
  text,
  children,
  isActive,
  handleActiveItem,
  index,
}) => {
  const userViewMenuItemWProps = { isActive };
  return (
    <UserViewMenuItemW {...userViewMenuItemWProps}>
      <Link to={false} onClick={() => handleActiveItem(index)}>
        {children} {text}
      </Link>
    </UserViewMenuItemW>
  );
};
