import React from "react";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGOUT = "USER_LOGOUT";

export const userInitialState = { isLoggedIn: false };

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case USER_LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return {};
  }
};

export const Application = React.createContext({
  state: null,
  dispatch: null,
});

export default userReducer;
