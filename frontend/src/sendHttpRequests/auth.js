import axios from "axios";
const HOST = "http://127.0.0.1:5000";
const TOURS_ROUTE = "/api/v1/users";

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(
      `${HOST}${TOURS_ROUTE}/login`,
      { email, password }
    );
    // console.log({ data });
    localStorage.setItem("username", data.data.user.name);
    // console.log(localStorage.getItem("username"));
    return data.data.user;
    // return data.data.doc;
  } catch (error) {
    console.log({ error });
    return false;
  }
};

export const signUp = async (input) => {
  try {
    const { data } = await axios.post(
      `${HOST}${TOURS_ROUTE}/signup`,
      input
    );
    console.log({ data });
    localStorage.setItem("username", data.data.user.name);
    // console.log(localStorage.getItem("username"));
    return true;
    // return data.data.doc;
  } catch (error) {
    console.log({ error });
    return false;
  }
};
