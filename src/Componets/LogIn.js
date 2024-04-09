import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Action/UserActions";
import "./LogIn.css";

import { openModal } from "../Action/ModalAction";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(openModal("closed", ""));
    }
  }, [userInfo]);

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="login-form">
      <h2>Log In or Sign Up</h2>

      {error && <h2>{error}</h2>}
      {loading && <h2>loading...</h2>}
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect with Facebook</button>
        <button className="Google-login">Connect with Google</button>

        <div className="login-or">
          <span>Or</span>

          <div className="or-divider"> </div>
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
        />

        <button className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>Don't have an Account? Sign up</div>
      </form>
    </div>
  );
};

export default LogIn;
