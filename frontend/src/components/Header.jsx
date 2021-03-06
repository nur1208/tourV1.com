import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import userReducer, {
  Application,
  userInitialState,
  USER_LOGGED_IN,
  USER_LOGOUT,
} from "../reducers/userReducer";
import { Container, HeaderLogo } from "../styledComps/header";
import { Nav } from "./header/Nav";

export const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [{ isLoggedIn, user }, dispatch] = useReducer(
    userReducer,
    userInitialState
  );

  const { state } = useContext(Application);
  const navTourProps = {
    isTours: true,
    navItems: [{ title: "All tours", href: "/" }],
  };
  useEffect(() => {
    if (state) {
      dispatch(state[state.length - 1]);
    }
  }, [state]);
  const handleLogout = () => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem("username");
  };
  const navUserProps = {
    isUser: true,
    navItems: [
      {
        onClickHandler: isLoggedIn ? handleLogout : false,
        title: isLoggedIn ? "Log out" : "Log in",
        href: "/login",
      },
      {
        href: isLoggedIn ? "/me" : "/sign-up",
        options: {
          username,
          isLoggedIn,
          image: "/img/users/user-4.jpg",
        },
      },
    ],
  };

  useEffect(() => {
    if (user) {
      setUsername(user.name);
      dispatch({ type: USER_LOGGED_IN, payload: user });
    } else {
      setUsername("");
    }
  }, [user]);
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
