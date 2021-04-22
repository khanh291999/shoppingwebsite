import React,  { useState, useContext } from 'react'
import GoogleLogin from 'react-google-login'
import UserContext from "../../context/userContext";
import {useHistory } from "react-router-dom";


export default function Google() {
    const { setUserData } = useContext(UserContext);
    const history = useHistory();
     const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        setUserData({
            token: response.profileObj.googleId,
            displayName: response.profileObj.givenName,
            email:response.profileObj.email,
            user: response.profileObj.givenName,
            id: response.profileObj.googleId
          });
          localStorage.setItem("google-token", JSON.stringify(response.googleId));
          history.push("/");
      }
        return (
            <div>
                  <GoogleLogin
                    clientId="54212149291-r1gattdm98fjb9u9kopedvfcosgob7rs.apps.googleusercontent.com"
                    buttonText="Login"
                    className="btn-gg"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    >
                      Sign In with Google
                    </GoogleLogin>
            </div>
        )
}
