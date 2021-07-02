import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { TextField, Typography } from "@material-ui/core";
import UserContext from "../context/userContext";
import Axios from "axios";
import ErrorNotice from "./misc/ErrorNotice";
import "./../assets/Login.css";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Swal from "sweetalert2";

export default function Changepassword() {
  const { userData, setUserData } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newpassword, setNewpassword] = useState();
  const [reenternewpassword, setReenternewpassword] = useState();
  const [error, setError] = useState();

  const history = useHistory();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    newpassword: "",
    reenternewpassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showNewPassword: false,
    showReenterNewPassword: false,
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

  const handleChangeNewPassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setNewpassword(event.target.value);
  };

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };

  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeReenterNewPassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setReenternewpassword(event.target.value);
  };

  const handleClickShowReenterNewPassword = () => {
    setValues({
      ...values,
      showReenterNewPassword: !values.showReenterNewPassword,
    });
  };

  const handleMouseDownReenterNewPassword = (event) => {
    event.preventDefault();
  };
  //post login data
  const submit = async (e) => {
    e.preventDefault();
    try {
      const changePasswordUser = {
        email: userData.user.email,
        password,
        newpassword,
        reenternewpassword,
      };
      await Axios.patch(
        `https://myauthapi1.herokuapp.com/users/changepassword/${userData.user.id}`,
        changePasswordUser
      );
      history.push("/");
      setUserData({
        token: undefined,
        user: undefined,
      });
      localStorage.setItem("auth-token", "");
      localStorage.setItem("user-login", "");
      Swal.fire({
        title: "Change Password Successfully, Please log in again",
        timer: 3000,
        icon: "success",
      });
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      Swal.fire({
        title: "Change Password Unsuccessfully",
        text: err.message,
        timer: 3000,
        icon: "error",
      });
    }
  };
  return (
    <div className="background" style={{ height: "80vh" }}>
      <div className="login-form-container">
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <h2>Change Password</h2>

        <div style={{ width: "60%", float: "right" }}>
          <Grid item xs={6}>
            <FormControl onSubmit={submit}>
              <h3>Please input the detail</h3>
              <Typography component="subtitle1">Email *</Typography>

              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{
                  margin: "2% 0",
                  width: "150%",
                }}
                value={userData.user.email}
              />

              <Typography component="subtitle1">
                Enter Old Password *
              </Typography>

              <OutlinedInput
                id="outlined-adornment-password"
                style={{
                  margin: "2% 0",
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

              <Typography component="subtitle1">
                Enter New password *
              </Typography>

              <OutlinedInput
                id="outlined-adornment-password"
                style={{
                  margin: "2% 0",
                  width: "150%",
                  backgroundColor: "#fff",
                }}
                type={values.showNewPassword ? "text" : "password"}
                value={values.newpassword}
                onChange={handleChangeNewPassword("newpassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownNewPassword}
                      edge="end"
                    >
                      {values.showNewPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <Typography component="subtitle1">
                Re-enter new password *
              </Typography>

              <OutlinedInput
                id="outlined-adornment-password"
                style={{
                  margin: "2% 0",
                  width: "150%",
                  backgroundColor: "#fff",
                }}
                type={values.showReenterNewPassword ? "text" : "password"}
                value={values.reenternewpassword}
                onChange={handleChangeReenterNewPassword("reenternewpassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowReenterNewPassword}
                      onMouseDown={handleMouseDownReenterNewPassword}
                      edge="end"
                    >
                      {values.showReenterNewPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <button type="submit" id="login-btn" onClick={submit}>
                  Change password
                </button>
                <span
                  style={{
                    fontFamily: "Titillium",
                    paddingLeft: "5px",
                    margin: "5px 0",
                    fontSize: "12px",
                    color: "#757575",
                  }}
                ></span>
              </div>
            </FormControl>
          </Grid>
        </div>
      </div>
    </div>
  );
}
