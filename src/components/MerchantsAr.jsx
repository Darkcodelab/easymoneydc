import React from "react";

//Components
import Footer from "./FooterAr";
import Header from "./HeaderAr";

//Image Files
import PlayStore from "../assets/images/playstore.png";
import AppleStore from "../assets/images/applestore.png";
import MerchantsMobile from "../assets/images/merchants_mob.png";
import Restaurants from "../assets/images/merchants_1.svg";
import Retails from "../assets/images/merchants_2.svg";
import Delivery from "../assets/images/merchants_3.svg";
import Taxi from "../assets/images/merchants_4.svg";
import Sports from "../assets/images/merchants_5.svg";
import Parking from "../assets/images/merchants_6.svg";
import Cdots from "../assets/images/c-dots.png";

//CSS Files
import "../assets/css/Consumer.css";
import "../assets/css/Merchants.css";
import "../assets/css/MerchantsAr.css";

const MerchantsAr = () => {
  return (
    <div className="wrapper arabic__wrapper merchant__wrapper">
      <Header />
      <div className="consumer__container">
        <section className="consumer__hero arabic__merchant__hero">
          <div className="hero__image__section merchant__section">
            <img src={MerchantsMobile} alt="hero" />
          </div>
          <div className="hero__text__section ">
            <div className="hero__heading merchant ">
              <h1>ﻪﻈﻔﺤﻤﻟﺎﺑ ﻊﻓﺪﻟا لﻮﺒﻗ ﺔﻣﺪﺧ ﺮﺟﺎﺘﻤﻟا ﻲﻓ ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا</h1>
              <p>
                ﻚﺋﺎﻠﻤﻌﻟ ﺎﻬﻣﺪﻘﺘﺑ ﻲﻠﻟا ﻊﻓﺪﻟا قﺮﻃ دوز و ﻚﻋوﺮﺸﻣ ﺮﺒﻛ ﻚﺳﻮﻠﻓ ﻞﺼﺣ و ﻚﺑ
                صﺎﺨﻟا QRلا ﻲﻠﻋ ﻞﺼﺣا نﺎﻣﺄﺑ و ﻪﻟﻮﻬﺴﺑ
              </p>
            </div>
            <div className="hero__cta">
              <img src={PlayStore} alt="PlayStore Link" />
              <img
                src={AppleStore}
                className="applestore"
                alt="AppleStore Link"
              />
            </div>
          </div>
        </section>
        <div className="consumer__secondary">
          <div className="consumer__howto" style={{ display: "none" }}>
            <div className="consumer__howto__text">
              <h3>ﻪﻈﻔﺤﻤﻟﺎﺑ ﻊﻓﺪﻟا لﻮﺒﻗ ﺔﻣﺪﺧ ﻢﻋﺎﻄﻤﻟا ﻲﻓ ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا</h3>
              <p>ﻞﺒﻘﺘﺳا و ﺖﻌﺑا و كدﻮﻬﺠﻣ و ﻚﺘﻗو ﺮﻓو ﺮﺼﻣ ﻲﻓ ﺔﻈﻔﺤﻣ يأ ﻦﻣ سﻮﻠﻓ</p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={Restaurants} alt="QR code" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>ﻪﻈﻔﺤﻤﻟﺎﺑ ﻊﻓﺪﻟا لﻮﺒﻗ ﺔﻣﺪﺧ ﻢﻋﺎﻄﻤﻟا ﻲﻓ ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا</h3>
              <p>ﻞﺒﻘﺘﺳا و ﺖﻌﺑا و كدﻮﻬﺠﻣ و ﻚﺘﻗو ﺮﻓو ﺮﺼﻣ ﻲﻓ ﺔﻈﻔﺤﻣ يأ ﻦﻣ سﻮﻠﻓ</p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={Restaurants} alt="QR code" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>
                ﻪﻈﻔﺤﻤﻟﺎﺑ ﻊﻓﺪﻟا لﻮﺒﻗ ﺔﻣﺪﺧ و كﺎﺸﻛﺎﻟا ﻲﻓ ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا ةﺮﻴﻐﺼﻟا
                ﺮﺟﺎﺘﻤﻟا{" "}
              </h3>
              <p>
                , سﻮﻠﻔﻟا ﻞﻴﺼﺤﺗ و شﺎﻜﻟا ﻢﻫ ﺶﻠﻴﺸﺘﻣ QRلا ﻲﻠﻋ ﻞﺼﺣا ﻚﻴﻠﻋ ﺎﻬﺘﻠﻬﺳ ﻚﻴﺑ
                صﺎﺨﻟا شﺎﻛ يﺰﻳا ﻞﻬﺳا و عﺮﺳا ﻞﺼﺣ و
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={Retails} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>ﻪﻈﻔﺤﻤﻟﺎﺑ ﻊﻓﺪﻟا لﻮﺒﻗ ﻪﻣﺪﺧ ﻞﻴﺻﻮﺘﻟا و ﻦﺤﺸﻟا ﺪﻨﻋ ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا</h3>
              <p>
                , عﺮﺳا و ﻞﻬﺳأ ﻰﻘﺑ ﻚﺗﺎﻨﺤﺷ سﻮﻠﻓ ﻞﻴﺼﺤﺗ دﻮﺟﻮﻤﻟا code QR لا نﺎﻜﺴﻴﻫ
                ﻞﻴﻤﻌﻟا ﻲﻧاﻮﺛ ﻲﻓ ﻚﺘﻈﻔﺤﻣ ﻲﻓ ﻲﻘﺒﺘﻫ ﻚﺳﻮﻠﻓ و ﺔﻨﺤﺸﻟا ﻰﻠﻋ
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={Delivery} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>ﻪﻈﻔﺤﻤﻟﺎﺑ ﻊﻓﺪﻟا لﻮﺒﻗ ﺔﻣﺪﺧ تﺎﻠﺣﺮﻟا ﻲﻓ ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا</h3>
              <p>
                ﺔﻟﻮﻬﺴﺑ ﺔﻠﺣﺮﻟا ﻦﻤﺗ ﻞﺼﺣ و شﺎﻜﻟا ﻞﻛﺎﺸﻣ ﻰﺴﻧأ ﻚﺑ صﺎﺨﻟا code QRلا
                نﺎﻜﺴﻴﻫ ﻚﻴﻠﻤﻋ ﻚﺘﻈﻔﺤﻣ ﻲﻓ ﻲﻘﺒﺘﻫ ﻚﺳﻮﻠﻓ
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={Taxi} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>ﻪﻈﻔﺤﻤﻟﺎﺑ ﺰﺠﺤﻟا لﻮﺒﻗ ﺔﻣﺪﺧ ﻪﻴﻧوﺮﺘﻜﻟﺈﻟا</h3>
              <p>
                ﻚﺋﺎﻠﻤﻋ , شﺎﻛ يﺰﻳا ﻊﻣ عﺮﺳا و ﻞﻬﺳا ﻲﻘﺑ ﺰﺠﺤﻟا QR ﻞﻟ نﺎﻜﺳ اﻮﻠﻤﻌﻳ ﺎﻣ
                دﺮﺠﻤﺑ ﻲﺘﻗﻮﻟد اوﺰﺠﺤﻴﻫ ﻲﻧاﻮﺛ ﻲﻓ ﻚﺳﻮﻠﻓ ﻞﺼﺤﺘﻫ ﺖﻧا و
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={Sports} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>جاﺮﺠﻟا مﻮﺳر ﻊﻓد ﺔﻣﺪﺧ</h3>
              <p>
                ﺔﻟﻮﻬﺴﺑ ﺔﻠﺣﺮﻟا ﻦﻤﺗ ﻞﺼﺣ و شﺎﻜﻟا ﻞﻛﺎﺸﻣ ﻰﺴﻧأ ﻚﺑ صﺎﺨﻟا code QRلا
                نﺎﻜﺴﻴﻫ ﻚﻴﻠﻤﻋ ﻚﺘﻈﻔﺤﻣ ﻲﻓ ﻲﻘﺒﺘﻫ ﻚﺳﻮﻠﻓ
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={Parking} alt="howto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MerchantsAr;
