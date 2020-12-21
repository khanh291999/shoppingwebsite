import React from "react";
import '.././assets/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>About Us</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Information</h2>
            <Link to='/'>Terms & Conditions</Link>
            <Link to='/'>Store Location</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Help</h2>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Shipping Details</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact us</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>
              <PhoneIcon></PhoneIcon>
              +84 963 339 696
            </Link>
            <Link to='/'>
              <MailIcon></MailIcon>
              17110071@student.hcmute.edu.vn
            </Link>
            <img 
              style={{paddingTop:"20px", width:"50%"}} 
              src="https://www.uniform.klovergroup.net/wp-content/uploads/2018/05/visa-mastercard.png" 
              alt="payment method"></img>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              K&Q
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>K&Q © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
