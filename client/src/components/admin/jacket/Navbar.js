import React, {useState,useContext} from "react";
import { useHistory} from "react-router-dom";
import {useEffect } from 'react';
import '../../../assets/Header.css';
import adminContext from "../../../context/adminContext"

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {MenuSideBar} from '../mainpage/listItem';
import Dashboard from '../mainpage/Dashboard'
import Jacket from './MainContent'
import Jean from '../jean/MainContentJean'
import Tshirt from '../t-shirt/MainContentTshirt'
import FemaleJacket from '../femalejacket/MainContentFemaleJacket'
import FemaleJean from '../femalejean/MainContentFemaleJean'
import FemaleTshirt from '../femalet-shirt/MainContentFemaleTshirt'
import DeJacket from '../disablejacket/MainContentDisableJacket'
import DeJean from '../disablejean/MainContentDisableJean'
import DeTshirt from '../disablet-shirt/MainContentDisableTshirt'
import DeFemaleJacket from '../disablefemalejacket/MainContentDisableFemaleJacket'
import DeFemaleJean from '../disablefemalejean/MainContentDisableFemaleJean'
import DeFemaleTshirt from '../disablefemalet-shirt/MainContentDisableFemaleTshirt'
import UserManagement from '../usercontrol/MainContentUserControl'
import StaffManagement from '../staffcontrol/MainContentStaffControl'
import OrderStatus from '../status/AdminStatus'
import UserProfile from '../UserProfile/UserProfile'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//sidebar width
const drawerWidth = 240;



//set style
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#282828',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Navbar(props) {
  // const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [active, setActive] = useState('dashboard');
  const { adminData, setadminData } = useContext(adminContext);
  // const handleClick = () => setClick(!click);
  const history = useHistory();
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  //declare menu
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  //set menu
  const isMenuOpen = Boolean(anchorEl);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
   
  };
  //
  const changeActive = (active) => {
    setActive(active);
    console.log("active",active);
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  //login
  const login = () => history.push("/login");
  //logout
  const logout = () =>{
    setadminData({
      token: undefined,
      admin: undefined,
    });
    localStorage.setItem("admin-token","");
    localStorage.setItem("admin-login","");
    history.push("/adlogin")
  }
  //menu
  // const verticalMenu = <CommonMenu mode="vertical" openAnimation="zoom" />;

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  //set component to show
  let renderComponent;

  if (active === 'dashboard'){
    renderComponent = <Dashboard/>;
  } else if (active === 'jacket'){
    renderComponent = <Jacket/>
  } else if (active === 'jean'){
    renderComponent = <Jean/>;
  } else if (active === 't-shirt'){
    renderComponent = <Tshirt/>
  } else if (active === 'femalejacket'){
    renderComponent = <FemaleJacket/>
  }  else if (active === 'femalejean'){
    renderComponent = <FemaleJean/>
  }  else if (active === 'femalet-shirt'){
    renderComponent = <FemaleTshirt/>
  } else if (active === 'de-jacket'){
    renderComponent = <DeJacket/>
  } else if (active === 'de-jean'){
    renderComponent = <DeJean/>;
  } else if (active === 'de-t-shirt'){
    renderComponent = <DeTshirt/>
  } else if (active === 'de-femalejacket'){
    renderComponent = <DeFemaleJacket/>
  }  else if (active === 'de-femalejean'){
    renderComponent = <DeFemaleJean/>
  }  else if (active === 'de-femalet-shirt'){
    renderComponent = <DeFemaleTshirt/>
  } else if (active === 'user'){
    renderComponent = <UserManagement/>
  }  else if (active === 'staff'){
    renderComponent = <StaffManagement/>
  } else if (active === 'order') {
    renderComponent = <OrderStatus/>
  } else if (active === 'profile') {
    renderComponent = <UserProfile/>
  }

  return (
    <>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" fontFamily="Cambria" style={{fontStyle:"1.6rem"}} noWrap className={classes.title}>
            Dashboard
          </Typography>
          
          {adminData.admin ? (
            <div className="username-header">
              <h5 className='user-name'>
                Welcome, {adminData.admin.displayName||adminData.displayName}
              </h5>
            </div>
              ) : ("You have log out. Please refresh the page")}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <MenuSideBar changeActive = {changeActive} logout ={logout}/>    
        
      </Drawer>
      {/* Content */}
      {renderComponent}
  </>
  );
}



