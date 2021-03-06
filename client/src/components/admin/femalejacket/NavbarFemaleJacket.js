import React, {useState,useContext} from "react";
import { Link, useHistory} from "react-router-dom";
import {useEffect } from 'react';
import '../../../assets/Header.css';
import BarsSolid from '../../../assets/icons/bars-solid'
import adminContext from "../../../context/adminContext"

export default function NavbarFemaleJacket(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { adminData, setadminData } = useContext(adminContext);
  const handleClick = () => setClick(!click);
  const history = useHistory();
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const logout = () =>{
    setadminData({
      token: undefined,
      admin: undefined,
    });
    localStorage.setItem("admin-token","");
    localStorage.setItem("admin-login","");
    history.push("/")
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbaradmin'>
    <button onClick={props.toggleSidebar}>
        <BarsSolid/>   
    </button>
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
            <Link to='/admin' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/adminstatus'
              className='nav-links'
            >
              Order Status
            </Link>
          </li>
          </ul>
          {adminData.admin? (
          <div className="username-header">
              <div className='user-name'>Welcome, {adminData.admin.displayName}
                <button id="logout-btn" onClick={logout}>SIGN OUT</button>
              </div>
            </div>
            ): ("") }
      </div>
    </nav>
  </>
  );
}



