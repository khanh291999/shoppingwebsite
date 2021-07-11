import React, { useState, useContext } from "react";
import FacebookLogin from "react-facebook-login";
import UserContext from "../../context/userContext";
import { useHistory } from "react-router-dom";

export default function Facebook() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const componentClicked = () => {};

  const responseFacebook = (response) => {
    setUserData({
      token: response.accessToken,
      displayName: response.name,
      email: response.email,
      id: response.userID,
      user: response.name,
    });
    localStorage.setItem(
      "facebook-token",
      JSON.stringify(response.accessToken)
    );
    history.push("/");
  };

  return (
    <FacebookLogin
      appId="2694624874123071"
      autoLoad={false}
      fields="name,email,picture"
      cssClass="btn-fb"
      icon="fa-facebook"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
}
