import React from "react";
import {
  NavContainer,
  NavEl,
} from "../../styledComps/header/navSc";
import { Button } from "../Button";
import { UserNameAndImg } from "../UserNameAndImg";

export const Nav = ({ isTours, isUser, navItems }) => {
  const navContainerProps = { isTours, isUser };
  return (
    <NavContainer id="NavContainer" {...navContainerProps}>
      {navItems &&
        navItems.map(({ title, options, href, onClickHandler }) =>
          !options ? (
            <NavEl
              to={onClickHandler ? false : href}
              onClick={onClickHandler}
            >
              {title}
            </NavEl>
          ) : (
            <NavEl>
              {options.isLoggedIn ? (
                <UserNameAndImg
                  image={options.image}
                  name={options.username}
                />
              ) : (
                <Button />
              )}
            </NavEl>
          )
        )}
    </NavContainer>
  );
};
