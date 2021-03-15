import React from "react";

//Components
import Footer from "./Footer";
import Header from "./Header";

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

const Consumer = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="consumer__container">
        <section className="consumer__hero">
          <div className="hero__image__section">
            <img src={ConsumerImg} alt="hero" />
          </div>
          <div className="hero__text__section">
            <div className="hero__heading">
              <h1>Your digital wallet for everyday Payments</h1>
            </div>
            <div className="hero__cta">
              <img src={PlayStore} alt="PlayStore Link" />
              <img src={AppleStore} alt="AppleStore Link" />
            </div>
          </div>
        </section>
        <div className="consumer__secondary">
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>QR Payments</h3>
              <p>
                Scan any QR code at nearby store and use the app to pay in
                seconds.
              </p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={QRConsumer} alt="QR code" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>Send Money</h3>
              <p>
                Save time and effort, send and receive money instantly from any
                E-wallet in Egypt.
              </p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={SendMoney} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>Top Up &amp; Withdraw from ATM</h3>
              <p>Deposit and withdraw cash easily from any Meeza ATM.</p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={ATM} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>Request to Receive Money</h3>
              <p>
                Easily request money from your friends or others. Just enter the
                amount and send the request.
              </p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={RequestMoney} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>Online Cards</h3>
              <p>
                Safely make purchases online on any website with your virtual
                online card.
              </p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={OnlineCards} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>Split Bills</h3>
              <p>
                Instantly pay back anyone the dinner or any activity they
                booked.
              </p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={SplitBills} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>Shake to pay</h3>
              <p>Shake your mobile to find available wallets around.</p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
              <img src={Cdots} className="dots__img" alt="dots" />
            </div>
            <div className="consumer__howto__img">
              <img src={ShakeToPay} alt="howto" />
            </div>
          </div>
          <div className="consumer__howto">
            <div className="consumer__howto__text">
              <h3>Saving Plans</h3>
              <p>
                Manage your savings, choose your goals, select a plan and save
                money
              </p>
              <a href="/">
                Learn More <i className="fas fa-arrow-right"></i>
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

export default Consumer;
