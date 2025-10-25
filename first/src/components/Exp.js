import React from 'react';
import html from '../assests/OIP.webp';
import css from '../assests/css.webp';
import js from '../assests/js.webp';
import python from '../assests/python.png';
import dj from '../assests/dj.webp';
import reactImg from '../assests/1.png';
import '../styles/exp.css'; 

const skills = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: js, name: "JavaScript" },
  { img: reactImg, name: "React" },
  { img: python, name: "Python" },
  { img: dj, name: "Django" },
];

const Exp = () => {
  return (
    <div className="exp-section">
      <h1 className="exp-heading">My Experience</h1>

      <div className="exp-content">
        {/* Left Side - Skills */}
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Experience */}
        <div className="experience-card">
          <h2>Web Development Intern</h2>
          <h4>ONGC | Jun 2024 – Jul 2024</h4>
          <ul>
            <li>Developed and maintained responsive web pages using HTML, CSS, JavaScript, and React.</li>
            <li>Worked on frontend optimization and UI/UX improvements.</li>
            <li>Documented web development processes and collaborated on project requirements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exp;
