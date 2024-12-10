import React from "react";
import "./ExperienceTab.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { GoDash } from "react-icons/go";

const ExperienceTab = ({
  key,
  logo,
  companyName,
  joinDate,
  exitDate,
  position,
  description,
}) => {
  return (
    <div className="experience-tab" key={key}>
      <div className="company-img-body">
        <img src={logo} alt="companylogo" className="company-logo" />
      </div>
      <diV className="experience-right">
        <div className="company-header">
          <span>
            <strong>{companyName}</strong> <FaLocationDot />
          </span>
          <span className="experience-date">
            <MdOutlineDateRange />
            {joinDate} <GoDash /> <MdOutlineDateRange /> {exitDate}
          </span>
        </div>
        <div className="position-text">{position}</div>

        <div className="experience-description">{description}</div>
      </diV>
    </div>
  );
};

export default ExperienceTab;
