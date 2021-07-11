import { Badge } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import get from "lodash/get";
import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../assets/Header.css";
import UserContext from "../context/userContext";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Header(props) {
  // const classes = useStyles(props);
  const { userData, setUserData } = useContext(UserContext);
  const [button, setButton] = useState(true);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useHistory();

  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/");
    localStorage.setItem("auth-token", "");
    localStorage.setItem("user-login", "");
  };
  //show/hide button if width to small
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  //nav test
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userData.user ? (
        <div className="username-header">
          {/* <h5 className='user-name'> {userData.user.displayName}</h5>
          <button id="logout-btn" onClick={logout}>SIGN OUT</button> */}
          <MenuItem>
            Welcome, {userData.user.displayName || userData.displayName}
          </MenuItem>
          <Link to="/userprofile" style={{ color: "black" }}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Link>
          <Link to="/changepassword" style={{ color: "black" }}>
            <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
          </Link>
          <Link to="/status" style={{ color: "black" }}>
            <MenuItem onClick={handleMenuClose}>Order Status</MenuItem>
          </Link>
          <MenuItem onClick={logout}>Log out</MenuItem>
        </div>
      ) : (
        <span>
          <MenuItem onClick={login}>Log In</MenuItem>
        </span>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Link to="/product">
            <LocalMallIcon style={{ color: "black" }} />
          </Link>
        </IconButton>
        <p>Shopping</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show number of product in cart" color="inherit">
          <Badge badgeContent={props.quantity} color="secondary">
            <Link to="/cart">
              <ShoppingCartIcon style={{ color: "black" }} />
            </Link>
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className={classes.grow}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#dbc7ae",
            height: "80px",
            placeContent: "center",
          }}
        >
          <Toolbar>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
            <Typography
              variant="h6"
              className={classes.title}
              style={{ fontSize: "2rem", paddingLeft: "25px" }}
            >
              <Link to="/">
                <a
                  href="/"
                  style={{
                    color: "white",
                    fontFamily: "Cambria",
                    fontSize: "2.5rem",
                  }}
                >
                  K&Q
                </a>
              </Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                color="inherit"
                style={{
                  backgroundColor: "transparent",
                  textDecoration: "none",
                }}
              >
                <Link to="/product" className="nav-links">
                  <LocalMallIcon />
                </Link>
              </IconButton>
              <IconButton
                style={{
                  backgroundColor: "transparent",
                  textDecoration: "none",
                }}
                aria-label="show number of product in cart"
                color="inherit"
              >
                <Badge badgeContent={props.quantity} color="secondary">
                  <Link to="/cart" className="nav-links">
                    <ShoppingCartIcon style={{ color: "white" }} />
                  </Link>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style={{
                  padding: "15px 30px 15px",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                }}
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const quantity = get(state, ["cart", "cartItems"], []).reduce(
    (count, cartProduct) => {
      return (count += cartProduct.quantity);
    },
    0
  );
  return {
    quantity,
  };
};

export default connect(mapStateToProps)(Header);
