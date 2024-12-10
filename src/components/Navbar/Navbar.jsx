import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Profile } from "../../assets/images";
import { IoMenu } from "react-icons/io5";

import { IoPersonSharp } from "react-icons/io5";

import { ImFilePdf } from "react-icons/im";
import { FaCode } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";

import { FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY; // Get the section's position
      const offset = window.innerHeight * 0.21; // Adjust the scroll position by 21% (100% - 79%)
      window.scrollTo({ top: offsetTop - offset, behavior: "smooth" }); // Scroll to adjusted position
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
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

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome /> },
    { name: "Skills", icon: <FaCode /> },
    { name: "About Me", icon: <IoPersonSharp /> },
    { name: "Projects", icon: <FaProjectDiagram /> },
    { name: "Resume", icon: <FaRegFilePdf /> },
  ];

  return (
    <header className="navbar-container">
      <div className="nav-box">
        {/* Left Menu */}
        <div className="nav-left" onClick={() => handleScrollTo("Home")}>
          Portfolio
        </div>

        {/* Middle Menu */}
        <div className="nav-middle">
          {["Skills", "About Me", "Projects", "Resume"].map((item) => (
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

        {/* Right Section */}
        <div className="nav-right">
          <div className="profile-container">
            <img src={Profile} alt="profile" className="profile-img" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu" onClick={() => setMobileMenuOpen(true)}>
          <IoMenu className="menu-icon" />
        </div>
      </div>

      {/* Mobile Menu - Conditional Rendering */}
      {mobileMenuOpen && (
        <div className="mobile-menu-container">
          <div className="mobile-menu-top">
            <div
              className="mobile-menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IoMenu className="menu-icon" />
            </div>
            <div className="profile-container">
              <img src={Profile} alt="profile" className="profile-img" />
            </div>
          </div>

          {menuItems.map((item) => (
            <div
              key={item.name}
              className="mobile-menu-item"
              onClick={() =>
                item.name === "Resume"
                  ? window.open("/Sanjay Dutta Resume.pdf", "_blank")
                  : handleScrollTo(item.name)
              }
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
