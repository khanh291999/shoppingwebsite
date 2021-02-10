import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {connect} from "react-redux"
import UserContext from "../context/userContext";
import { useState, useEffect } from 'react';
import { Button } from './Button';
import '../assets/Header.css';
//
import IconButton from "@material-ui/core/IconButton";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

function Header(props) {
  // const classes = useStyles(props);
  const { userData, setUserData } = useContext(UserContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const history = useHistory();

  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    localStorage.setItem("user-login","");
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

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' style={{fontFamily: "LibreBaskervilleBold,Georgia,Times,serif"}}>
          K&Q
          <i class='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/product'
              className='nav-links'
            >
              Products
            </Link>
          </li>
          {
            userData.user?
          <li className='nav-item'>
            <Link
              to='/status'
              className='nav-links'
            >
              Order Status
            </Link>
          </li>
          : ("")
          }
          <li className='nav-item'>
              <IconButton edge="start" color='Colors.white' aria-label="menu" id="cart-icon">
                <Link to="/cart">
                <Badge badgeContent={props.quantity} color="secondary">
                  <ShoppingCart />
                </Badge>
                </Link>
              </IconButton>
          </li>
          </ul>
          
          {userData.user ? (
            <div className="username-header">
              {/* <h5 className='user-name'> {userData.user.displayName}</h5>
              <button id="logout-btn" onClick={logout}>SIGN OUT</button> */}
              <div className='user-name'>Welcome, {userData.user.displayName||userData.displayName}
                <button id="logout-btn" onClick={logout}>SIGN OUT</button>
              </div>
            </div>
              ) : (
            <span>
              {button && <Button onClick={login} buttonStyle='btn--outline'>SIGN IN</Button>}
            </span>
          )}
          
      </div>
    </nav>
  </>
  );
}

const mapStateToProps = state =>{
  const quantity = state.cart.reduce((count,product_in_cart)=>{
    return (count = count + product_in_cart.quantity);
  }, 0);
  return {
    quantity: quantity
  }
}

export default connect(mapStateToProps)(Header)