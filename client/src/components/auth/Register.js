import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Typography } from "@material-ui/core";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Grid from "@material-ui/core/Grid";
import Facebook from "./Facebook";
import Google from "./Google";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "../../assets/Register.css";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [error, setError] = useState();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    repassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showRePassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
  };

  const handleChange1 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPasswordCheck(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword1 = () => {
    setValues({ ...values, showRePassword: !values.showRePassword });
  };

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  //post register data
  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        displayName,
        address,
        phoneNumber,
      };
      await Axios.post("http://localhost:8080/users/register", newUser);
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
      <div className="register-form-container">
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <h2>CREATE AN ACCOUNT</h2>

        <FormControl onSubmit={submit}>
          <Typography component="subtitle1">Username *</Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "2% 0", width: "200%" }}
          />

          <Typography component="subtitle1">Address *</Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setAddress(e.target.value)}
            style={{ margin: "2% 0", width: "200%" }}
          />

          <Typography component="subtitle1">Phone number *</Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ margin: "2% 0", width: "200%" }}
          />

          <Typography component="subtitle1">Email *</Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "2% 0", width: "200%" }}
          />

          <Typography component="subtitle1">Password *</Typography>

          <OutlinedInput
            id="outlined-adornment-password"
            style={{ margin: "2% 0", width: "200%", backgroundColor: "#fff" }}
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          <OutlinedInput
            id="outlined-adornment-password"
            style={{ margin: "2% 0", width: "200%", backgroundColor: "#fff" }}
            type={values.showRePassword ? "text" : "password"}
            value={values.repassword}
            onChange={handleChange1("repassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {values.showRePassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          <button type="submit" id="register-btn" onClick={submit}>
            Register
          </button>
          <span
            style={{
              fontFamily: "Titillium",
              paddingLeft: "5px",
              margin: "5px 0",
              fontSize: "12px",
              color: "#757575",
            }}
          >
            Or, sign up with
          </span>
          <button id="fb-login-btn">
            <Facebook />
          </button>
          <button id="gg-login-btn">
            <Google />
          </button>
        </FormControl>
      </div>
    </div>
  );
}
