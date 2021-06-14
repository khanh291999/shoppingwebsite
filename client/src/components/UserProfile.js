import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import UserContext from "../context/userContext";
import "../assets/UserProfile.css";
import axios from "axios";
import Swal from "sweetalert2";
import { FormControl } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  avatar: {
    width: "150px",
    height: "150px",
    border: "1px solid #dbc7ae",
  },
}));

export default function UserProfile() {
  const { userData, setUserData } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [displayName, setDisplayName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [helperText, setHelperText] = useState("");
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    if (
      email == undefined ||
      displayName == undefined ||
      address == undefined ||
      phoneNumber == undefined
    ) {
      setHelperText("Please input your information");
    } else {
      try {
        await axios.patch(`http://localhost:8080/user/${userData.user.id}`, {
          email,
          displayName,
          address,
          phoneNumber,
        });
        Swal.fire({
          title: "Update Successfully, Please log in again",
          timer: 1000,
          icon: "success",
        });
      } catch (err) {
        Swal.fire({
          title: "Update Unsuccessfully",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      }
      history.push("/");
      setUserData({
        token: undefined,
        user: undefined,
      });
      localStorage.setItem("auth-token", "");
      localStorage.setItem("user-login", "");
    }
  };

  const classes = useStyles();
  return (
    <div style={{ padding: "10%" }}>
      <div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div>
                <Paper className={classes.paper}>
                  <div style={{ textAlign: "-webkit-center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/57128382_1080220895519208_2983454892787499008_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=z6-YmPykJ9QAX_0lhOD&_nc_ht=scontent-sin6-2.xx&oh=cde695428b154dae14bb2faa70fb382d&oe=60D34E2C"
                      className={classes.avatar}
                    />
                    <Typography
                      variant="h5"
                      style={{ fontWeight: "700" }}
                      className="user-name-left"
                    >
                      {userData.user.displayName}
                    </Typography>
                    <Typography>{userData.user.address}</Typography>
                  </div>
                </Paper>
                <Paper className={classes.paper} style={{ marginTop: "20px" }}>
                  <div className="user-info-container">
                    <Typography className="user-info-title">
                      Full Name
                    </Typography>
                    <Typography>{userData.user.displayName}</Typography>
                  </div>
                  <Divider />
                  <div className="user-info-container">
                    <Typography className="user-info-title">Email</Typography>
                    <Typography>{userData.user.email}</Typography>
                  </div>
                  <Divider />
                  <div className="user-info-container">
                    <Typography className="user-info-title">
                      Phone Number
                    </Typography>
                    <Typography>{userData.user.phoneNumber}</Typography>
                  </div>
                  <Divider />
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div>
                <Paper className={classes.paper}>
                  <FormControl style={{ width: "100%" }}>
                    <div className="user-info-container">
                      <Typography className="user-info-title">Email</Typography>
                      <TextField
                        style={{ width: "100%" }}
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={helperText}
                        error={helperText.length === 0 ? false : true}
                      ></TextField>
                    </div>
                    <Divider />
                    <div className="user-info-container">
                      <Typography className="user-info-title">
                        User Name
                      </Typography>
                      <TextField
                        style={{ width: "100%" }}
                        required
                        id="username"
                        label="User Name"
                        name="username"
                        autoComplete="username"
                        onChange={(e) => setDisplayName(e.target.value)}
                        helperText={helperText}
                        error={helperText.length === 0 ? false : true}
                      ></TextField>
                    </div>
                    <Divider />
                    <div className="user-info-container">
                      <Typography className="user-info-title">
                        Phone Number
                      </Typography>
                      <TextField
                        style={{ width: "100%" }}
                        required
                        id="phonenumber"
                        label="Phone Number"
                        name="phonenumber"
                        autoComplete="phonenumber"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        helperText={helperText}
                        error={helperText.length === 0 ? false : true}
                      ></TextField>
                    </div>
                    <Divider />
                    <div className="user-info-container">
                      <Typography className="user-info-title">
                        Address
                      </Typography>
                      <TextField
                        style={{ width: "100%" }}
                        required
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        onChange={(e) => setAddress(e.target.value)}
                        helperText={helperText}
                        error={helperText.length === 0 ? false : true}
                      ></TextField>
                    </div>
                    <Divider />
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "#dbc7ae",
                        margin: "10px 0",
                        color: "#fff",
                        fontWeight: "600",
                      }}
                      onClick={submit}
                    >
                      Update Profile
                    </Button>
                  </FormControl>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
