import React, { useState } from "react";
import "./About.css";
import ExperienceTab from "../../components/ExperienceTab/ExperienceTab";
import { BrandLiberty, KnorrBremse } from "../../assets/images/logos";
import { MdContentCopy } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const About = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const experience = [
    {
      logo: BrandLiberty,
      companyName: "Brand Liberty, Pune",
      joinDate: "1 Jan 2022",
      exitDate: "2 Feb 2023",
      position: "Front-end Developer Intern",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, corrupti!",
    },
    {
      logo: KnorrBremse,
      companyName: "Knorr Bremse, Pune",
      joinDate: "21 Nov 2023",
      exitDate: "21 Nov 2024",
      position: "Front-end Developer Apprentice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, corrupti!",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sanjay-swapan-dutta/",
    },
    {
      icon: <IoMdMail />,
      name: "E-Mail",
      link: "mailto:sanjaydutta978@gmail.com",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/Sanjay-2001",
    },
  ];

  const handleCopy = (index, link) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
        })
        .catch(() => alert("Failed to copy!"));
    } else {
      alert("Clipboard not supported on this browser/device.");
    }
  };

  return (
    <div className="about-body" id="About Me">
      <div className="about-header">ABOUT ME</div>
      <div className="about-content">
        <div className="about-left">
          <div className="about-description">
            <p>
              Hello! I'm <strong>Sanjay Swapan Dutta</strong>, a passionate and
              dedicated <strong>Full-Stack Web Developer</strong> with a keen
              interest in building dynamic, responsive and user-friendly web
              applications.
            </p>
            <p>
              With experience in both front-end and back-end technologies, I
              strive to create seamless and efficient solutions that bridge
              design with functionality. Whether it’s crafting sleek user
              interfaces or engineering robust server-side systems, I approach
              every project with a blend of creativity and technical expertise.
            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="about-experience">
            <div>
              <div className="experience-header">Experience</div>
              <div className="experience-tab-body">
                {experience.map((item, index) => (
                  <ExperienceTab
                    key={index}
                    logo={item.logo}
                    companyName={item.companyName}
                    joinDate={item.joinDate}
                    exitDate={item.exitDate}
                    position={item.position}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            <div className="experience-footer">
              <p>Let’s connect and create something amazing together!</p>
              <div className="social-body">
                {socialLinks.map((social, index) => (
                  <div className="social" key={index}>
                    {social.icon}
                    <a
                      className="social-link"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                    <MdContentCopy
                      className="copy-icon"
                      onClick={() => handleCopy(index, social.link)}
                    />
                    {copiedIndex === index && (
                      <span className="copy-tag">Copied!</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
