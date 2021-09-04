import React, { useState } from "react";
import { Container, HeaderLogo } from "../styledComps/header";
import { Nav } from "./header/Nav";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navTourProps = {
    isTours: true,
    navItems: [{ title: "All tours", href: "/" }],
  };
  const navUserProps = {
    isUser: true,
    navItems: [
      { title: isLoggedIn ? "Log out" : "Log in" },
      {
        options: {
          username: "Ayla",
          isLoggedIn,
          image: "/img/users/user-4.jpg",
        },
      },
    ],
  };
  return (
    <Container id="Container">
      <Nav {...navTourProps} />
      <HeaderLogo id="HeaderLogo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </HeaderLogo>
      <Nav {...navUserProps} />
    </Container>
  );
};
