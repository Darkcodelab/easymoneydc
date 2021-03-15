import React from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

//Image files
import AboutImg from "../assets/images/aboutus_img.png";
import AboutLine from "../assets/images/aboutus_line.png";
import Tick from "../assets/images/tick.png";
import Rocket from "../assets/images/rocket.png";
import Vision from "../assets/images/vision.png";
import Mission from "../assets/images/mission.png";
import Excellence from "../assets/images/excellence.svg";
import Empowerment from "../assets/images/Empowerment.svg";
import Integrity from "../assets/images/Integrity.svg";
import Responsibility from "../assets/images/Responsibility.svg";
import Teamwork from "../assets/images/Teamwork.svg";
import Commitment from "../assets/images/Commitment.svg";
import Innovation from "../assets/images/Innovation.svg";
import Transparency from "../assets/images/Transparency.svg";
import CultureImg from "../assets/images/culture_img.svg";

//CSS file(s)
import "../assets/css/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="about__container">
        <section className="about__hero">
          <div className="about__text">
            <h1>About EasyCash</h1>
            <p>
              EasyCash aims to encourage the Egyptians toward digital payments
              simplifying the payment process and creating a seamless purchasing
              experience. EasyCash offers a complete technology suite
              aggregating the payment ecosystem; while leveraging its technology
              to alter the financial sector and lead the transformation towards
              financial inclusion.
            </p>
          </div>
          <div className="about__img">
            <img src={AboutImg} alt="About Us" />
          </div>
        </section>
        <div className="about__timeline__container">
          <div className="timeline__img">
            <img src={AboutLine} alt="Timeline" />
          </div>
          <div className="about__timeline__entry about__timeline__entry__first">
            <div className="about__timeline__img rocket__img">
              <img src={Rocket} alt="Rocket" />
            </div>
            <div className="about__timeline__text about__timeline__first">
              <h2>2019</h2>
              <p>
                Confident in the large potential of the Egyptian market and the
                importance of digitalization, EasyCash was founded to develop
                operations in Egypt.
              </p>
            </div>
          </div>
          <div className="about__timeline__entry about__timeline__entry__second">
            <div className="about__timeline__img tick__img">
              <img src={Tick} alt="Tick" />
            </div>
            <div className="about__timeline__text">
              <h2>2020</h2>
              <p>
                EasyCash have acquired the license from the Central Bank of
                Egypt.
              </p>
            </div>
          </div>
        </div>
        <div className="vision__wrapper">
          <div className="vision__background"></div>
          {/* <div className="about__vision__container">
            <div className="about__vision">
              <img src={Vision} alt="Vision" />
              <div className="vision__text">
                <h2>Vision</h2>
                <p>To transform MENA region into a cashless society.</p>
              </div>
            </div>
            <div className="about__mission">
              <img src={Mission} alt="Mission" />
              <div className="vision__text">
                <h2>Mission</h2>
                <p>
                  Providing a state of art digital payment solutions, offering
                  innovative & secure payment methods as an alternative to cash.
                </p>
              </div>
            </div>
          </div> */}
          <div className="about__timeline__container">
            <div className="about__timeline__entry about__timeline__entry__first">
              <div className="about__timeline__img rocket__img">
                <img src={Vision} alt="Rocket" />
              </div>
              <div className="about__timeline__text about__timeline__first">
                <h2>Vision</h2>
                <p>To transform MENA region into a cashless society.</p>
              </div>
            </div>
            <div className="about__timeline__entry about__timeline__entry__second">
              <div className="about__timeline__img tick__img">
                <img src={Mission} alt="Tick" />
              </div>
              <div className="about__timeline__text">
                <h2>Mission</h2>
                <p className="mission__p">
                  Providing a state of art digital payment solutions, offering
                  innovative &amp; secure payment methods as an alternative to
                  cash.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="living__wrapper">
          <div className="living__hero">
            <h2>Living Our Values</h2>
            <p>Our beliefs distinguish us as a company</p>
          </div>
          <div className="living__cards">
            <div className="living__card">
              <div className="card__icon">
                <img src={Innovation} alt="Innovation" />
              </div>
              <div className="card__text">
                <p>Innovation</p>
              </div>
            </div>
            <div className="living__card">
              <div className="card__icon">
                <img src={Excellence} alt="Excellence" />
              </div>
              <div className="card__text">
                <p>Excellence</p>
              </div>
            </div>
            <div className="living__card">
              <div className="card__icon">
                <img src={Integrity} alt="Integrity" />
              </div>
              <div className="card__text">
                <p>Integrity</p>
              </div>
            </div>
            <div className="living__card">
              <div className="card__icon">
                <img src={Responsibility} alt="Responsibility" />
              </div>
              <div className="card__text">
                <p>Responsibility</p>
              </div>
            </div>
            <div className="living__card">
              <div className="card__icon transparency-img">
                <img src={Transparency} alt="Transparency" />
              </div>
              <div className="card__text">
                <p>Transparency</p>
              </div>
            </div>
            <div className="living__card">
              <div className="card__icon">
                <img src={Teamwork} alt="Teamwork" />
              </div>
              <div className="card__text">
                <p>Teamwork</p>
              </div>
            </div>
            <div className="living__card">
              <div className="card__icon">
                <img src={Commitment} alt="Commitment" />
              </div>
              <div className="card__text">
                <p>Commitment</p>
              </div>
            </div>
            <div className="living__card">
              <div className="card__icon">
                <img src={Empowerment} alt="Empowerment" />
              </div>
              <div className="card__text">
                <p>Empowerment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="culture__wrapper">
          <div className="culture__img__container">
            <img src={CultureImg} alt="Culture" />
          </div>
          <div className="culture__text__container">
            <h2>Our Culture</h2>
            <p>
              EasyCash believes in simplifying people's lives, be it customers
              or business owners. Our values represent a big part of out
              identity. we believe that innovation is the mean to a greater
              future, that's why our employees show a great deal of commitment
              and dedication, working as a one unit to achieve our mutual goals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
