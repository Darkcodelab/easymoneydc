import React from "react";

//Components
import Header from "./HeaderAr";
import Footer from "./FooterAr";

//Image Files
import PlayStore from "../assets/images/playstore.png";
import AppleStore from "../assets/images/applestore.png";
import ConsumerImg from "../assets/images/consumer.png";
import QRConsumer from "../assets/images/qr-consumer.png";
import SendMoney from "../assets/images/consumer-img2.png";
import ATM from "../assets/images/consumer-img3.png";
import RequestMoney from "../assets/images/consumer-img4.png";
import OnlineCards from "../assets/images/consumer-img5.png";
import SplitBills from "../assets/images/consumer-img6.png";
import ShakeToPay from "../assets/images/consumer-img7.png";
import SavingPlans from "../assets/images/consumer-img8.png";
import Cdots from "../assets/images/c-dots.png";

//CSS File
import "../assets/css/Consumer.css";
import "../assets/css/ConsumerAr.css";

const ConsumerAr = () => {
  return (
    <div className="wrapper arabic__wrapper">
      <Header />
      <div className="consumer__container">
        <section className="consumer__hero">
          <div className="hero__image__section">
            <img src={ConsumerImg} alt="hero" />
          </div>
          <div className="hero__text__section">
            <div className="hero__heading">
              <h1>محفظتك الإلكترونيه لمعاملاتك اليوميه</h1>
            </div>
            <div className="hero__cta consumerAr-link">
              <img
                src={PlayStore}
                className="applestore"
                alt="PlayStore Link"
              />
              <img src={AppleStore} alt="AppleStore Link" />
            </div>
          </div>
        </section>
        <div className="consumer__secondary">
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text  ">
              <h3>QR لا دﻮﻛ ماﺪﺨﺘﺳﺎﺑ ﻊﻓدأ</h3>
              <p>نﺎﻜﺳ لﺎﻠﺧ ﻦﻣ ﻲﻧاﻮﺛ ﻲﻓ ﻊﻓدا و ﻦﺸﻴﻜﻴﻠﺑﺎﻟا ﻞﻤﻌﺘﺳأ QR لا دﻮﻜﻟ</p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={QRConsumer} alt="QR code" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text ">
              <h3>سﻮﻠﻓ ﺖﻌﺑأ</h3>
              <p>ﻞﺒﻘﺘﺳا و ﺖﻌﺑا و كدﻮﻬﺠﻣ و ﻚﺘﻗو ﺮﻓو ﺮﺼﻣ ﻲﻓ ﺔﻈﻔﺤﻣ يأ ﻦﻣ سﻮﻠﻓ</p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={SendMoney} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text ">
              <h3>تﺎﻨﻴﻛﺎﻣ ﻦﻣ ﺐﺤﺳ و عاﺪﻳإ ﻲﻟﺎﻟا فاﺮﺼﻟا</h3>
              <p>
                ﺔﻨﻴﻛﺎﻣ يا ﻦﻣ عاﺪﻳا و ﺐﺤﺳ ﻞﻤﻌﺗ رﺪﻘﺗ ﻪﻟﻮﻬﺴﺑ ﻲﻟﺎﻟا فاﺮﺼﻠﻟ ةﺰﻴﻣ
                تﺎﻨﻴﻛﺎﻣ ﻦﻣ
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={ATM} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text ">
              <h3>سﻮﻠﻓ مﺎﻠﺘﺳا ﺐﻠﻃ</h3>
              <p>
                دﺪﺤﺗ رﺪﻘﺗ ﻲﻧاﻮﺛ ﻲﻓ ,ﻪﻟﻮﻬﺴﺑ ﺪﺣ يا ﻦﻣ سﻮﻠﻓ ﺐﻠﻃأ ﺐﻠﻄﻟا ﻪﻠﺘﻌﺒﺗ و
                ﺎﻬﺟﺎﺘﺤﻣ ﻲﻠﻟا ﺔﻤﻴﻘﻟا
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={RequestMoney} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text ">
              <h3>ﻦﻳﺎﻠﻧوا ﻊﻓﺪﻟا ترﺎﻛ</h3>
              <p>ﻊﻓﺪﺗ و يﺮﺘﺸﺘﻫ ﻊﻓﺪﻟا ترﺎﻛ لﺎﻠﺧ ﻦﻣ نﺎﻣأ و ﻪﻟﻮﻬﺴﺑ ﻦﻳﺎﻠﻧوا</p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={OnlineCards} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text ">
              <h3>ةرﻮﺗﺎﻔﻟا ﻢﻴﺴﻘﺗ</h3>
              <p>
                ﻚﺑﺎﺤﺻا و ﺖﻧا ةرﻮﺗﺎﻔﻟا اﻮﻤﺴﻘﺘﻫ ﻲﺘﻗﻮﻟد ﺖﻗو ﻊﻴﻀﺗ ﺮﻴﻏ ﻦﻣ ﻪﺟوﺮﺧ يا ﻲﻓ
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={SplitBills} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text ">
              <h3> Pay to Shake ﺔﻴﺻﺎﺧ</h3>
              <p>
                ﻆﻓﺎﺤﻣ بﺮﻗا ﻲﻗﺎﻠﺗ نﺎﺸﻋ pay to shake ﺔﻴﺻﺎﺧ مﺪﺨﺘﺳأ دﻮﻬﺠﻣ ﻞﻗﺎﺑ ﻚﻴﻟ
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={ShakeToPay} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text consumer_ar_text ">
              <h3>رخدا</h3>
              <p>
                ﺎﻬﻘﻘﺤﺗ كﺪﻋﺎﺴﺘﻫ شﺎﻛ يﺰﻳا نﺎﺸﻋ ﻚﻓاﺪﻫا دﺪﺣ ﺎﻬﻨﻣ ﺮﺧﺪﺘﺗ و ﻚﺳﻮﻠﻓ ﻲﻓ
                ﻢﻜﺤﺘﺗ ﻚﻧﺎﺑ
              </p>
              <a href="/">
                ﺪﻳﺰﻤﻟا فﺮﻋأ <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={SavingPlans} alt="howto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConsumerAr;
