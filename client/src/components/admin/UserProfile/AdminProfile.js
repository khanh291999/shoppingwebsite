import React, { useEffect, useContext, useState } from "react";
import adminContext from "../../../context/adminContext";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "./components/GridItem";
import GridContainer from "./components/GridContainer.js";
import CustomInput from "./components/CustomInput.js";
import Button from "./components/Button.js";
import Card from "./components/Card.js";
import { Link } from "react-router-dom";
import axios from "axios";
import CardHeader from "./components/CardHeader.js";
import CardAvatar from "./components/CardAvatar.js";
import CardBody from "./components/CardBody.js";
import CardFooter from "./components/CardFooter.js";
import "../../../assets/AdminProfile.css";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
// import avatar from "";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const { adminData, setadminData } = useContext(adminContext);
  const [email, setEmail] = useState();
  const [displayName, setDisplayName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [description, setDescription] = useState();
  const [helperText, setHelperText] = useState("");
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    if (
      email == undefined ||
      displayName == undefined ||
      address == undefined ||
      phoneNumber == undefined ||
      description == undefined
    ) {
      setHelperText("Please input your information");
    } else {
      try {
        await axios.patch(`http://localhost:8080/admin/${adminData.admin.id}`, {
          email,
          displayName,
          address,
          phoneNumber,
          description,
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
      setadminData({
        token: undefined,
        admin: undefined,
      });
      localStorage.setItem("admin-token", "");
      localStorage.setItem("admin-login", "");
    }
  };

  return (
    <div>
      <GridContainer
        style={{ paddingTop: "11%", width: "99%", paddingLeft: "4%" }}
      >
        <GridItem xs={10} sm={12} md={8}>
          <Card>
            {/* <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader> */}
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
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
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    style={{ width: "100%" }}
                    required
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    onChange={(e) => setDescription(e.target.value)}
                    helperText={helperText}
                    error={helperText.length === 0 ? false : true}
                  ></TextField>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={submit}>
                Update Profile
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={10} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                {/* <img src={avatar} alt="..." /> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" />
              </a>
            </CardAvatar>
            <CardBody profile className="set-padding">
              <h4 style={{ marginBottom: "-12%" }}>Display name:</h4>
              <p className={classes.cardTitle} style={{ fontSize: "1.5rem" }}>
                {adminData.admin.displayName}
              </p>
              <h4 className={classes.cardTitle}>Personal Info:</h4>
              <p style={{ fontSize: "0.9rem", marginTop: "-9%" }}>
                {adminData.admin.displayName}
                <br />
                {adminData.admin.email}
                <br />
                {adminData.admin.phoneNumber}
                <br />
                {adminData.admin.address}
              </p>
              <p className={classes.description}>
                {adminData.admin.description}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
