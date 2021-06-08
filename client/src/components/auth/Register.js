import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import '../../assets/Register.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../../assets/icons/google_icon.png'
import Grid from '@material-ui/core/Grid'
import Facebook from './Facebook'
import Google from './Google'

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  //post register data
  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName, address, phoneNumber };
      await Axios.post("http://localhost:8080/users/register", newUser);
      console.log("ResponseRegister");
      const loginRes = await Axios.post("http://localhost:8080/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="background">
      <div className='register-form-container'>
        <h2>Register</h2>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <form className="form" onSubmit={submit}>
          <Grid container spacing={2} className="grid-container">
            <Grid item xs={6} className="col1">
              <label htmlFor="register-email">Email</label>
                <input
                  id="register-email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

              <label htmlFor="register-password">Password</label>
                <input
                  id="register-password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Verify password"
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
              
              <label htmlFor="register-address">Adress</label>
                <input
                  id="register-address"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />

                <label htmlFor="register-phone-number">Phone Number</label>
                <input
                  id="register-phone-number"
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

            </Grid>
              
            <Grid item xs={6} className="col1">
            <label htmlFor="register-display-name">User name</label>
            <input
              id="register-display-name"
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <button type="submit" id="register-btn">Register</button>
            <span
                style={{fontFamily: "Titillium",
                paddingLeft: "5px", 
                margin: "5px 0", 
                fontSize: "12px", 
                color: "#757575"}}>
              Or, sign up with
            </span>
            <button id="fb-login-btn">
              <Facebook/>
            </button>
            <button id="gg-login-btn">
              <Google/>
            </button>

            <div className='register-in-login-container'>
                Already have an account?
                <Link
                  to='/login'
                  className='login-in-register'
                >
                  Login
                </Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
