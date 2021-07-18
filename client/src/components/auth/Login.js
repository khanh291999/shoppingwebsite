import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Typography, Button } from "@material-ui/core";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import "../../assets/Login.css";
import Grid from "@material-ui/core/Grid";
import Facebook from "./Facebook";
import Google from "./Google";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //post login data
  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:8080/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("user-login", JSON.stringify(loginRes.data.user));
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="background" style={{ height: "85vh" }}>
      <div className="login-form-container">
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <h2>SIGN IN</h2>

        <div style={{ width: "50%", float: "left" }}>
          <Grid item xs={6}>
            <div>
              <h3>NEW CUSTOMERS</h3>
              <div style={{ margin: "25px 0" }}>
                Creating an account is easy. Just fill in the form below and
                enjoy the benefits of having an account.
              </div>
              <button style={{ margin: "0" }} id="login-btn">
                <Link to="/register" style={{ color: "white" }}>
                  Create an Account
                </Link>
              </button>
            </div>
          </Grid>
        </div>

        <div style={{ width: "50%", float: "right" }}>
          <Grid item xs={6}>
            <form onSubmit={submit}>
              <h3>LOGIN</h3>
              <Typography component="subtitle1">Email *</Typography>

              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                style={{ margin: "2% 0", width: "150%" }}
              />

              <Typography component="subtitle1">Password *</Typography>

              <OutlinedInput
                id="outlined-adornment-password"
                style={{
                  margin: "2% 0 8% 0",
                  width: "150%",
                  backgroundColor: "#fff",
                }}
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

              <Link
                to="/reset"
                style={{
                  color: "#000",
                  textDecoration: "underline",
                  textAlignLast: "left",
                  padding: "20px 0",
                }}
              >
                Forget password
              </Link>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5%",
                }}
              >
                <Button type="submit" id="login-btn">
                  Log in
                </Button>
                <span
                  style={{
                    fontFamily: "Titillium",
                    paddingLeft: "5px",
                    margin: "5px 0",
                    fontSize: "12px",
                    color: "#757575",
                  }}
                >
                  Or,login with
                </span>
                <Facebook />
                <Google />
              </Grid>
            </form>
          </Grid>
        </div>
      </div>
    </div>
  );
}
