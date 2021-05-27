import React from "react";
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
import CardHeader from "./components/CardHeader.js";
import CardAvatar from "./components/CardAvatar.js";
import CardBody from "./components/CardBody.js";
import CardFooter from "./components/CardFooter.js";
import '../../../assets/UserProfile.css'

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
                    <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                        fullWidth: true,
                        }}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Country"
                        id="country"
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
                    <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/57128382_1080220895519208_2983454892787499008_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TjBsOw1Cx6AAX9pdB8X&_nc_ht=scontent-xsp1-1.xx&oh=c0029b77880f86032c2920f81fdc2ab2&oe=60CF59AC" />
                </a>
                </CardAvatar>
                <CardBody profile className='set-padding'>
                <h6 className={classes.cardCategory} style={{fontSize:'0.9rem'}}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle} style={{fontSize:'1.5rem'}}>khanh1</h4>
                <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves Kanye
                    I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                    <Link style={{color:'white'}} to={{
                    pathname: "https://www.facebook.com/do2999"
                    }}>Follow</Link>
                </Button>
                </CardBody>
            </Card>
            </GridItem>
        </GridContainer>
        </div>
    );
}
