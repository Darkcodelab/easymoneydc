import React, { useState } from "react";
import Logo from "../assets/images/logo2.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import Menu from "../assets/images/menu.svg";
import { NavLink } from "react-router-dom";
import LogoNav from "../assets/images/easycash.png";

// CSS FILE
import "../assets/css/Header.css";

const HeaderAr = () => {
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
              to="/ar"
              activeClassName="nav__link--active"
              className="nav__link "
              onClick={navClick}
            >
              ﺔﻴﺴﻴﺋﺮﻟا ﺔﺤﻔﺼﻟا
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/about-ar"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              شﺎﻛ يﺰﻳإ ﻦﻋ
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/consumer-ar"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              شﺎﻛ يﺰﻳإ ﺔﻈﻔﺤﻣ
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/merchants-ar"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              شﺎﻛ يﺰﻳإ رﺎﺠﺗ
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              exact
              to="/contact-ar"
              activeClassName="nav__link--active"
              className="nav__link"
              onClick={navClick}
            >
              ﺎﻨﻌﻣ ﻞﺻاﻮﺗ
            </NavLink>
          </li>
          <li>
            <div className="nav__social">
              <div className="social__link__a">
                <a href="/" className="social__link">
                  English
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
      </nav>
    </header>
  );
};

export default HeaderAr;
