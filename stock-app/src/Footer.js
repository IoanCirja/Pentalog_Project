import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer2">
        <div className="footer-logo">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>

        <div className="aboutApp">
          <div className="contact">
            <p>CONTACT</p>
            <p> ✆ Phone: +1-543-123-4567</p>
            <p>✉ Stock-Tracker@gmail.com</p>
          </div>

          <div className="usefulLinks">
            <p>USEFUL LINKS</p>
            <Link id="link1" to="https://www.minerone.pro/Usage_Policy.html">
              Usage Policy
            </Link>
            <Link id="link1" to="https://www.minerone.pro/Privacy_Policy.html">
              Privacy Policy
            </Link>
          </div>

          <div className="follow-us">
            <p>LET'S KEEP IN TOUCH!</p>
            <Link id="link1" to="https://www.facebook.com/">
              <img id="icon" src="/icons8-facebook.svg" alt="Facebook Logo" />
            </Link>
            <Link id="link1" to="https://www.instagram.com/">
              <img id="icon" src="/icons8-instagram.svg" alt="Instagram Logo" />
            </Link>
            <Link id="link1" to="https://www.youtube.com/">
              <img id="icon" src="icons8-youtube.svg" alt="YouTube Logo" />
            </Link>
          </div>
        </div>
        <p id="copyright">COPYRIGHT © 2023 Stock Tracker ALL RIGHT RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
