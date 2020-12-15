import React, {useState} from "react";
import { Link} from "react-router-dom";
import {useEffect } from 'react';
import '../../../assets/Header.css';
import BarsSolid from '../../../assets/icons/bars-solid'

export default function AdminStatusNavbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
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
    <nav className='navbaradmin'>
    {/* <button onClick={props.toggleSidebar}>
        <BarsSolid/>   
    </button> */}
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
      </div>
    </nav>
  </>
  );
}



