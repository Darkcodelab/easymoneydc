import React from "react";

//Image files
import AboutImg from "../assets/images/aboutus_img.png";
import AboutLine from "../assets/images/aboutus_line.png";
import Tick from "../assets/images/tick.png";
import Rocket from "../assets/images/rocket.png";
import Vision from "../assets/images/vision.png";
import Mission from "../assets/images/mission.png";

//CSS file(s)
import "../assets/css/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about__container">
      <section className="about__hero">
        <div className="about__text">
          <h1>About EasyCash</h1>
          <p>
            EasyCash aims to encourage the Egyptians toward digital payments
            simplifying the payment process and creating a seamless purchasing
            experience. EasyCash offers a complete technology suite aggregating
            the payment ecosystem; while leveraging its technology to alter the
            financial sector and lead the transformation towards financial
            inclusion.
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
          <div className="about__timeline__img">
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
          <div className="about__timeline__img">
            <img src={Tick} alt="Tick" />
          </div>
          <div className="about__timeline__text">
            <h2>2020</h2>
            <p>
              EasyCash have acquired the license from the Central Bank of Egypt.
            </p>
          </div>
        </div>
      </div>
      <div className="vision__wrapper">
        <div className="about__vision__container">
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
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
