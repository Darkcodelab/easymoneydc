import React from "react";
import Logo from "../assets/images/easycash.png";
import "../assets/css/Footer.css";
import facebook from "../assets/images/facebook-white.png";
import instagram from "../assets/images/instagram-white.png";
import linkedin from "../assets/images/linkedin-white.png";

const FooterAr = () => {
  return (
    <div className="footer__parent__wrapper">
      <footer className="footer__container">
        <div className="footer__hero">
          <div className="footer__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footer__ql quick__links">
            <h3>ديزملا</h3>
            <div className="list">
              <a href="/">مقالات</a>
              <a href="/">سياسة الخصوصية</a>
              <a href="/">شروط الإستخدام</a>
            </div>
          </div>
          <div className="company footer__ql">
            <h3>ايزي كاش</h3>
            <div className="list">
              <a href="/">عن ايزي كاش</a>
              <a href="/">وظائف</a>
              <a href="/">اتصل بنا</a>
            </div>
          </div>
          <div className="services footer__ql">
            <h3>الخدمات</h3>
            <div className="list">
              <a href="/">محفظه ايزي كاش</a>
              <a href="/">تجار ايزي كاش</a>
            </div>
          </div>
        </div>
        <div className="footer__secondary">
          <a href="/"> 2021 © ﺔﻇﻮﻔﺤﻣ قﻮﻘﺤﻟا ﻊﻴﻤﺟ</a>
          <div className="footer__social">
            <h5>:ﻲﻠﻋ ﺎﻨﻌﺒﺗا</h5>
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

export default FooterAr;
