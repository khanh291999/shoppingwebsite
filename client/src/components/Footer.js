import React from "react";
import ".././assets/Footer.css";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

export default function Footer() {
  const handleClickFB = () => {
    window.open("https://www.facebook.com/do2999");
  };
  const handleClickIG = () => {
    window.open("https://www.instagram.com/q_khanh__/");
  };
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Information</h2>
            <Link to="/about">About K&Q</Link>
            <Link to="/about">Contact Us</Link>
          </div>
          <div class="footer-link-items">
            <h2>Orders</h2>
            <Link to="/orderhelp">Ordering</Link>
            <Link to="/deliveryhelp">Delivery</Link>
            <Link to="/returnhelp">Returning</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Help</h2>
            <Link to="/privacypolicy">Privacy Policy</Link>
            <Link to="/shippingdetails">Shipping Details</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact us</h2>
            <Link onClick={handleClickIG}>Instagram</Link>
            <Link onClick={handleClickFB}>Facebook</Link>
            <Link to="/">
              <PhoneIcon></PhoneIcon>
              +84 963 339 696
            </Link>
            <Link to="/">
              <MailIcon></MailIcon>
              17110071@student.hcmute.edu.vn
            </Link>
            <img
              style={{ paddingTop: "20px", width: "50%" }}
              src="https://www.uniform.klovergroup.net/wp-content/uploads/2018/05/visa-mastercard.png"
              alt="payment method"
            ></img>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">K&Q © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
