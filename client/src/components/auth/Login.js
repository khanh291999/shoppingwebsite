import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import '../../assets/Login.css'
import Grid from '@material-ui/core/Grid'
import Facebook from './Facebook'
import Google from './Google'

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  //post login data
  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:8080/users/login",
        loginUser
      );
      console.log("Response")
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("user-login",  JSON.stringify(loginRes.data.user));
      // console.log(loginRes.data.user);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="background">
      <div className='login-form-container'>
        <h2>Welcome to K&Q! Please login.</h2>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        
        <form className="form" onSubmit={submit}>
          <Grid container spacing={2} className="grid-container">
            <Grid item xs={6} className="col1">
              <label htmlFor="login-email">Email</label>  
                <input
                  id="login-email"
                  type="email"
                  placeholder="Please enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="Please enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='register-in-login-container'>
                You are new?
                <Link
                  to='/register'
                  className='register-in-login'
                >
                  Register
                </Link>
              </div>
            </Grid>
              
            <Grid item xs={6} className="col1">
            <button type="submit" id="login-btn">Log in</button>
            <span
                style={{fontFamily: "Titillium",
                paddingLeft: "5px", 
                margin: "5px 0", 
                fontSize: "12px", 
                color: "#757575"}}>
              Or,login with
            </span>
            {/* <button id="fb-login-btn"> */}
              {/* <FacebookIcon></FacebookIcon>
              <div style={{margin: "4px"}}>Facebook</div> */}
              <Facebook/>
            {/* </button> */}
            {/* <button id="gg-login-btn">
              <img
                style={{maxWidth: "8%"}} 
                src={GoogleIcon}
                />
              <div style={{margin: "4px"}}>Google</div>
            </button> */}
            <Google/>
            </Grid>
          </Grid>
        </form>
      </div> 
    </div>
  );
}
