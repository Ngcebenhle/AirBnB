import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from ".././Types/UserTypes";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // const { data } = await axios.post(
    //   'http://localhost:5000/login'
    //   ,s
    //   { email, password },
    //   config
    // );

    const { data } = axios.get("https://ns-air-bnb-bckend.onrender.com/users").then((result) => {
      result.data.map((user) => {
        if (user.email === email && user.password === password) {
          alert("Login successfuly");
          // localStorage.setItem("userInfo", JSON.stringify(data));
        } else {
          alert("Login un-successfuly");
        }
      });
    });

    const userData = { email: email, password: password };
    localStorage.setItem("userInfo", JSON.stringify(userData));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {};
