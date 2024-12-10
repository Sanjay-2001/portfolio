import React from "react";
import "./SkillBox.css";

const SkillBox = ({ name, logo }) => {
  return (
    <div className="skill-box">
      <img src={logo} alt={name} className="skill-icon" />
      <div className="skill-text">{name}</div>
    </div>
  );
};

export default SkillBox;
