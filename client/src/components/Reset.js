import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Typography } from "@material-ui/core";
import Axios from "axios";
import ErrorNotice from "./misc/ErrorNotice";
import "./../assets/Login.css";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Swal from "sweetalert2";

export default function Reset() {
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const resetPasswordUser = {
        email: email,
      };
      await Axios.post(
        `http://localhost:8080/users/resetpassword`,
        resetPasswordUser
      );
      history.push("/");
      Swal.fire({
        title: "Please check your email",
        timer: 3000,
        icon: "success",
      });
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      Swal.fire({
        title: "Something went wrong, please contact admin",
        text: err.message,
        timer: 3000,
        icon: "error",
      });
    }
  };
  return (
    <div className="background" style={{ height: "85vh" }}>
      <div className="login-form-container">
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <h2>Reset Password</h2>

        <div style={{ width: "60%", float: "right" }}>
          <Grid item xs={6}>
            <FormControl onSubmit={submit}>
              <h3>Please input your email</h3>
              <Typography component="subtitle1">Email *</Typography>

              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{
                  margin: "2% 0",
                  width: "150%",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <button type="submit" id="login-btn" onClick={submit}>
                  Reset password
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
