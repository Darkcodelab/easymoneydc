import React from "react";

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

const Merchants = () => {
  return (
    <div className="consumer__container">
      <section className="consumer__hero">
        <div className="hero__image__section merchant__section">
          <img src={MerchantsMobile} alt="hero" />
        </div>
        <div className="hero__text__section">
          <div className="hero__heading merchant">
            <h1>In-Store Payments</h1>
            <p>
              Now merchants has the ability to accept the most popular payment
              methods in the physical world without the requirement of a POS
              terminal{" "}
            </p>
          </div>
          <div className="hero__cta">
            <img src={PlayStore} alt="PlayStore Link" />
            <img src={AppleStore} alt="AppleStore Link" />
          </div>
        </div>
      </section>
      <div className="consumer__secondary">
        <div className="consumer__howto" style={{ display: "none" }}>
          <div className="consumer__howto__text">
            <h3>Restaurants</h3>
            <p>
              Offer your guest a unique user experience, start accepting digital
              payment using QR Code.
            </p>
            <a href="/">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
            <img src={Cdots} alt="dots" />
          </div>
          <div className="consumer__howto__img">
            <img src={Restaurants} alt="QR code" />
          </div>
        </div>
        <div className="consumer__howto">
          <div className="consumer__howto__text">
            <h3>Restaurants</h3>
            <p>
              Offer your guest a unique user experience, start accepting digital
              payment using QR Code.
            </p>
            <a href="/">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
            <img src={Cdots} alt="dots" />
          </div>
          <div className="consumer__howto__img">
            <img src={Restaurants} alt="QR code" />
          </div>
        </div>
        <div className="consumer__howto">
          <div className="consumer__howto__text">
            <h3>Small Retail &amp; Service</h3>
            <p>
              Start accepting QR payment as a complement to POS terminals, the
              customer scan the QR code and easily pay.
            </p>
            <a href="/">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
            <img src={Cdots} alt="dots" />
          </div>
          <div className="consumer__howto__img">
            <img src={Retails} alt="howto" />
          </div>
        </div>
        <div className="consumer__howto">
          <div className="consumer__howto__text">
            <h3>Delivery</h3>
            <p>
              Delivery payment became easier by just letting your customer scan
              the QR code on the package
            </p>
            <a href="/">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
            <img src={Cdots} alt="dots" />
          </div>
          <div className="consumer__howto__img">
            <img src={Delivery} alt="howto" />
          </div>
        </div>
        <div className="consumer__howto">
          <div className="consumer__howto__text">
            <h3>Taxicab/Taxi/Cab</h3>
            <p>
              Finally we found you a solution to the money issue that you may
              face in your ride. You can now receive your money directly to your
              EasyCash wallet
            </p>
            <a href="/">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
            <img src={Cdots} alt="dots" />
          </div>
          <div className="consumer__howto__img">
            <img src={Taxi} alt="howto" />
          </div>
        </div>
        <div className="consumer__howto">
          <div className="consumer__howto__text">
            <h3>Sporting Fees</h3>
            <p>
              Now tickets and other stuff can be purchased by scanning QR code
              easily
            </p>
            <a href="/">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
            <img src={Cdots} alt="dots" />
          </div>
          <div className="consumer__howto__img">
            <img src={Sports} alt="howto" />
          </div>
        </div>
        <div className="consumer__howto">
          <div className="consumer__howto__text">
            <h3>Parking Charging</h3>
            <p>
              Parking cars has neven been easier. Now each customer can easily
              scan parking QR code and pay money to you directly via EasyCash
              wallet
            </p>
            <a href="/">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
            <img src={Cdots} alt="dots" />
          </div>
          <div className="consumer__howto__img">
            <img src={Parking} alt="howto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchants;
