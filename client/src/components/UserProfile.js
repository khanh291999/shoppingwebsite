import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import '../assets/UserProfile.css'

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
    },
    avatar: {
        width: '150px',
        height: '150px'
    }
}));

export default function UserProfile(){
    const classes = useStyles();
    return(
        <div style={{padding:'10%'}}>
            <div>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <div>
                                <Paper className={classes.paper}>
                                    <div style={{textAlign:'-webkit-center'}}>
                                        <Avatar alt="Remy Sharp" src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/57128382_1080220895519208_2983454892787499008_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=z6-YmPykJ9QAX_0lhOD&_nc_ht=scontent-sin6-2.xx&oh=cde695428b154dae14bb2faa70fb382d&oe=60D34E2C" className={classes.avatar} />
                                        <Typography variant="h5" style={{fontWeight:'700'}} className="user-name-left">Khanh1</Typography>
                                        <Typography>84 Phan Van Tri, P8, Go Vap</Typography>
                                    </div>
                                </Paper>
                                <Paper className={classes.paper} style={{marginTop:'20px'}}>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">Full Name</Typography>
                                        <Typography>Do Quoc Khanh</Typography>
                                    </div>
                                    <Divider/>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">Email</Typography>
                                        <Typography>khanh@gmail.com</Typography>
                                    </div>
                                    <Divider/>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">Phone Number</Typography>
                                        <Typography>(+84) 84 6542684</Typography>
                                    </div>
                                    <Divider/>
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <div>
                                <Paper className={classes.paper}>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">Full Name</Typography>
                                        <TextField style={{width:'100%'}}></TextField>
                                    </div>
                                    <Divider/>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">Email</Typography>
                                        <TextField style={{width:'100%'}}></TextField>
                                    </div>
                                    <Divider/>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">User Name</Typography>
                                        <TextField style={{width:'100%'}}></TextField>
                                    </div>
                                    <Divider/>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">Phone Number</Typography>
                                        <TextField style={{width:'100%'}}></TextField>
                                    </div>
                                    <Divider/>
                                    <div className="user-info-container" >
                                        <Typography className="user-info-title">Address</Typography>
                                        <TextField style={{width:'100%'}}></TextField>
                                    </div>
                                    <Divider/>
                                    <Button variant="contained" style={{backgroundColor:"#dbc7ae", margin:'10px 0', color:'#fff', fontWeight:'600'}}>
                                        Update Profile
                                    </Button>
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}