import React from "react";
import Logo from "../assets/images/easycash.png";
import "../assets/css/Footer.css";
import facebook from "../assets/images/facebook-white.png";
import instagram from "../assets/images/instagram-white.png";
import linkedin from "../assets/images/linkedin-white.png";

const Footer = () => {
  return (
    <div className="footer__parent__wrapper">
      <footer className="footer__container">
        <div className="footer__hero">
          <div className="footer__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footer__ql quick__links">
            <h3>Quick Links</h3>
            <div className="list">
              <a href="/">Blogs</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of use</a>
            </div>
          </div>
          <div className="company footer__ql">
            <h3>Company</h3>
            <div className="list">
              <a href="/">About us</a>
              <a href="/">Careers</a>
              <a href="/">Contact us</a>
            </div>
          </div>
          <div className="services footer__ql">
            <h3>Services</h3>
            <div className="list">
              <a href="/">EasyCash Wallet</a>
              <a href="/">Merchant app</a>
            </div>
          </div>
        </div>
        <div className="footer__secondary">
          <a href="/"> &copy; Copyrights 2020 EasyCash - All Rights Reserved</a>
          <div className="footer__social">
            <h5>Follow us on:</h5>
            <div className="footer__social__links">
              <div className="social__link__a">
                <a href="/" className="social__link">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
              <div className="social__link__a">
                <a href="/" className="social__link">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
              <div className="social__link__a">
                <a href="/" className="social__link">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
