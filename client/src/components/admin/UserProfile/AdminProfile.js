import React, { useEffect, useContext, useState } from 'react';
import adminContext from "../../../context/adminContext"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "./components/GridItem";
import GridContainer from "./components/GridContainer.js";
import CustomInput from "./components/CustomInput.js";
import Button from "./components/Button.js";
import Card from "./components/Card.js";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardHeader from "./components/CardHeader.js";
import CardAvatar from "./components/CardAvatar.js";
import CardBody from "./components/CardBody.js";
import CardFooter from "./components/CardFooter.js";
import '../../../assets/AdminProfile.css'

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
    const [ adminDisplayName , setAdminDisplayName ] = useState("");
    const [ adminAddress, setAdminAddress ] = useState("");
    const [ adminPhoneNumber, setAdminPhoneNumber ] = useState("");
    const [ adminEmail, setAdminEmail ] = useState("");

    const getAdminData = () => {
        setAdminDisplayName(adminData.admin ? adminData.admin.displayName||adminData.displayName : "");
        setAdminAddress(adminData.admin ? adminData.admin.address: "");
        setAdminPhoneNumber(adminData.admin ? adminData.admin.phoneNumber: "");
        setAdminEmail(adminData.admin ? adminData.admin.email: "");
    };

    useEffect(() => {
        getAdminData();
    }, [])

    const handleFB = () =>{
        window.open("https://www.facebook.com/do2999")
    }
    return (
    <div>
        <GridContainer style={{paddingTop:'11%', width:'99%', paddingLeft:'4%'}}>
            <GridItem xs={10} sm={12} md={8}>
            <Card>
                <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
                </CardHeader>
                <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                        fullWidth: true,
                        }}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                        fullWidth: true,
                        }}
                    />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                        fullWidth: true,
                        }}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                        fullWidth: true,
                        }}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Phone number"
                        id="phone-number"
                        formControlProps={{
                        fullWidth: true,
                        }}
                    />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="Address"
                        id="address"
                        formControlProps={{
                        fullWidth: true,
                        }}
                    />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                    <CustomInput
                        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                        id="about-me"
                        formControlProps={{
                        fullWidth: true,
                        }}
                        inputProps={{
                        multiline: true,
                        rows: 5,
                        }}
                    />
                    </GridItem>
                </GridContainer>
                </CardBody>
                <CardFooter>
                <Button color="primary">Update Profile</Button>
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
                <CardBody profile className='set-padding'>
                    <h4 style={{marginBottom:'-12%'}}>Display name:</h4>
                    <p className={classes.cardTitle} style={{fontSize:'1.5rem'}}>{adminDisplayName}</p>
                    <h4 className={classes.cardTitle}>Personal Info:</h4>
                    <p style={{fontSize:'0.9rem', marginTop:'-9%'}}>
                        {adminDisplayName}
                        <br/>
                        {adminEmail}
                        <br/>
                        {adminPhoneNumber}
                    </p>
                    <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to restart the
                        human foundation in truth And I love you like Kanye loves Kanye
                        I love Rick Owens’ bed design but the back is...
                    </p>
                    {/* <Button color="primary" round>
                        <Link style={{color:'#fff'}} onClick={handleFB}>Follow</Link>
                    </Button> */}
                </CardBody>
            </Card>
            </GridItem>
        </GridContainer>
        </div>
    );
}
