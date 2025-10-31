import React from 'react'
import '../styles/about.css';




const aboutPoints = [
  "Motivated IT graduate with hands-on experience in React.js, JavaScript, HTML, and CSS, building responsive and interactive web applications.",
  "Working knowledge of Python and Django, capable of integrating frontend with backend logic and understanding API workflows.",
  "Practical experience from projects and internship at ONGC, including developing an online banking system and contributing to professional web development projects.",
  "Passionate about creating user-friendly, accessible, and responsive web solutions, continuously learning new technologies and following best coding practices."
];

const About = () => {
  return (
    <div className='about-section'>
      <h2>About Me</h2>
      <ul className='about-list'>
        {aboutPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
     
    </div>
  );
}

export default About;