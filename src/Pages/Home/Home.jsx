import React from "react";
import "./Home.css";
import { HeroBackground } from "../../assets/videos";
import { HeroImage } from "../../assets/images";
import { IoSparkles } from "react-icons/io5";

const Home = () => {
  const handleContactMe = () => {
    window.location.href = "mailto:sanjaydutta978@gmail.com";
  };

  return (
    <div className="home-container" id="Home">
      <video className="background-video" autoPlay loop muted>
        <source src={HeroBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-content">
        <div className="home-left">
          <div className="content-body">
            <div className="left-top">
              <div className="content-tag">
                <IoSparkles className="sparkle-icon" />
                Welcome to my space!
              </div>
            </div>
            <div className="left-bottom">
              <div className="content-title">
                <span>
                  Providing<span className="highlight-text"> the best </span>
                  project experience
                </span>
              </div>
              <div className="content-description">
                Full Stack Web Developer focused on creating dynamic,
                user-friendly web and mobile experiences. Check out my projects
                and skills.
              </div>

              <div className="contact-button-body">
                <button className="contact-button" onClick={handleContactMe}>
                  Contact Me!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img src={HeroImage} alt="bannerImg" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
