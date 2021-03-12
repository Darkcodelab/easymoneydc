import React from "react";
import "../assets/css/Contact.css";
import Map from "../assets/images/maps.png";
import CDots from "../assets/images/c-dots.png";

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__bg-top-right">
        <img src={CDots} alt="Dots" />
      </div>
      <section className="contact__section__wrapper">
        <div className="contact__heading">
          <h1>Get In Touch</h1>
        </div>
        <div className="contact__form__container">
          <div className="contact__form__div">
            <h3>Leave us a message</h3>
            <form action="/" className="contact__form">
              <div className="formgroup">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Firstname Lastname"
                />
              </div>
              <div className="formgroup">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="formgroup">
                <textarea name="message" cols="30" rows="10"></textarea>
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
          <div className="contact__details__div">
            <div className="contact__text">
              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <p>19926</p>
              </div>
              <div className="mail">
                <i className="far fa-envelope"></i>
                <p>info@easycash-eg.com</p>
              </div>
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <p>46 Al thawra, Almazah, Masr El gedeeda, Cairo, Egypt</p>
              </div>
            </div>
            <div className="map">
              <a href="https://www.google.com.eg/maps/dir/30.047652,31.4570441/easycash+map/@30.070506,31.3359618,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14583f73fa8d2721:0xd9a11e7ba5792ba3!2m2!1d31.336542!2d30.0859665">
                <img src={Map} alt="Map" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="contact__bg-bottom-left">
        <img src={CDots} alt="Dots" />
      </div>
    </div>
  );
};

export default Contact;
