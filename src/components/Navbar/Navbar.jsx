import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Profile } from "../../assets/images";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="navbar-container">
      <div className="nav-box">
        <div className="nav-left" onClick={() => handleScrollTo("Home")}>
          Portfolio
        </div>
        <div className="nav-middle">
          {["Skills", "About", "Projects", "Resume"].map((item) => (
            <div
              key={item}
              className="nav-item"
              onClick={() =>
                item === "Resume"
                  ? window.open("/Sanjay Dutta Resume.pdf", "_blank")
                  : handleScrollTo(item)
              }
            >
              {item}
            </div>
          ))}
        </div>
        <div className="nav-right">
          <div className="profile-container">
            <img src={Profile} alt="profile" className="profile-img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
