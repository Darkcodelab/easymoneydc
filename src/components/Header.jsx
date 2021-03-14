import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/images/logo2.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import Menu from "../assets/images/menu.svg";
import { NavLink } from "react-router-dom";
import LogoNav from "../assets/images/easycash.png";

// CSS FILE
import "../assets/css/Header.css";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);
  let handleMenuOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  let navClick = () => setIsOpen(false);

  return (
    <header className="header__container">
      <nav className="nav">
        <div className="navbrand">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <ul className={isOpen ? "nav__ul nav__ul--active" : "nav__ul"}>
          <li className="nav__li nav__li__logo">
            <NavLink
              exact
              to="/"
              activeClassName="nav__link--active"
              className="nav__link "
              onClick={navClick}
            >
              <img src={LogoNav} alt="Logo" />
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/"
              activeClassName="nav__link--active"
              className="nav__link "
              onClick={navClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/about"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/consumer"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              EasyCash Wallet
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/merchants"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              Merchants
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/contact"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <div className="nav__social">
              <div className="social__link__a">
                <a href="/" className="social__link">
                  يبرع
                </a>
              </div>
              <div className="social__link__a social__link__icon">
                <a href="/" className="social__link">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
              <div className="social__link__a social__link__icon">
                <a href="/" className="social__link">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
              <div className="social__link__a social__link__icon">
                <a href="/" className="social__link">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="nav__menu" onClick={handleMenuOpen}>
          <img src={Menu} alt="Menu" />
        </div>
        {/* <div className="nav__social">
          <div className="social__link__a">
            <a href="/" className="social__link">
              يبرع
            </a>
          </div>
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
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
