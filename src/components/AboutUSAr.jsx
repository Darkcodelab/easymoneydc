import React from "react";

//Components
import Header from "./HeaderAr";
import Footer from "./FooterAr";

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
import "../assets/css/AboutUsAr.css";

const AboutUsAr = () => {
  return (
    <div className="wrapper arabic__wrapper">
      <Header />
      <div className="about__container">
        <section className="about__hero">
          <div className="about__text">
            <h1>عن ايزي كاش</h1>
            <p>
              تهدف ايزي كاش الى تشجيع المصريين على التحول الي الدفع الالكتروني،
              وتسهيل عملية البيع والشراء وتوفير تجربة دفع مختلفة. تقدم ايزي كاش
              نظام تكنولوجي متكامل امن وسهل حيث يقوم بدوره بتعزيز النظام
              الاقتصادي وتقديم حلول ذكية لتحقيق الشمول المالي
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
                . ثقة منا في السوق المصري وايمانا بأهمية التحول الرقمي، تاسست
                ايزي كاش لتطوير المعاملات المالية في مصر
              </p>
            </div>
          </div>
          <div className="about__timeline__entry about__timeline__entry__second">
            <div className="about__timeline__img">
              <img src={Tick} alt="Tick" />
            </div>
            <div className="about__timeline__text">
              <h2>2020</h2>
              <p>حصلت ايزي كاش على رخصة البنك المركزي</p>
            </div>
          </div>
        </div>
        <div className="vision__wrapper">
          <div className="about__vision__container">
            <div className="about__vision">
              <img src={Vision} alt="Vision" />
              <div className="vision__text">
                <h2>رؤيتنا</h2>
                <p>تحويل المنطقي الى مجتمع مالي بدون كاش</p>
              </div>
            </div>
            <div className="about__mission">
              <img src={Mission} alt="Mission" />
              <div className="vision__text">
                <h2>مهمتنا</h2>
                <p>
                  تقديم حلول مالية ذكية متكاملة من خلال توفير طرق امنه ومختلفة
                  للسداد
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="living__wrapper">
          <div className="living__hero">
            <h2>قيمنا</h2>
            <p>قيمنا هي ما تحدد من نكون</p>
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
            <h2>ثقافتنا</h2>
            <p>
              تؤمن ايزي كاش بأهمية تسهيل حياة المصريين. إذا كانوا عملاء او أصحاب
              اعمال. وتمثل قيمنا جزء كبير من هويتنا. نحن نؤمن في ايزي كاش ان
              التجديد هو الطريق لمستقبل أفضل لذلك فان موظفينا على قدر كبير من
              الالتزام والعمل الجماعي لتحقيق اهدافنا المشتركة
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsAr;
