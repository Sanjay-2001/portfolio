import React from "react";
import "./Skills.css";
import SkillBox from "../../components/SkillBox/SkillBox";
import {
  Cloudinary,
  Css,
  AspDotNet,
  ExpressJs,
  Figma,
  Git,
  HTMLlogo,
  Javascript,
  Jenkins,
  MongoDB,
  NextJs,
  NodeJs,
  Openai,
  Python,
  Reactlogo,
  SQLlogo,
  Tailwind,
  Vite,
} from "../../assets/images/logos";

const skills = [
  { name: "HTML", logo: HTMLlogo },
  { name: "CSS", logo: Css },
  { name: "JavaScript", logo: Javascript },
  { name: "React", logo: Reactlogo },
  { name: "Node.js", logo: NodeJs },
  { name: "MongoDB", logo: MongoDB },
  { name: "Express.js", logo: ExpressJs },
  { name: "ASP.NET", logo: AspDotNet },
  { name: "Python", logo: Python },
  { name: "Cloudinary", logo: Cloudinary },
  { name: "Figma", logo: Figma },
  { name: "Git", logo: Git },
  { name: "Jenkins", logo: Jenkins },
  { name: "Next.js", logo: NextJs },
  { name: "OpenAI", logo: Openai },
  { name: "SQL", logo: SQLlogo },
  { name: "Tailwind", logo: Tailwind },
  { name: "Vite", logo: Vite },
];

const Skills = () => {
  return (
    <div className="skills-body" id="Skills">
      <div className="skills-header">SKILLS</div>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <SkillBox key={index} name={skill.name} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
