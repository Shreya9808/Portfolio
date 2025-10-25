import React from "react";
import '../styles/projects.css';


const Projects = () => {
  const projectData = [
    {
      title: "Online Banking System",
      description:
        "A secure web app built using React with Json-server that allows users to register, transfer funds, and view transaction history.",
      
      source: "https://github.com/Shreya9808/React-banking",
    },
    {
      title: "ONGC Official Website",
      description:
        "Developed a responsive website for ONGC using HTML, CSS, and JavaScript during my internship.",
      
      source: "https://github.com/Shreya9808/ONGC-Project",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio created with React showcasing my skills, experience, and projects.",
     
      source: "https://github.com/Shreya9808/Portfolio",
    },
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-heading">My Projects</h1>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-buttons">
              
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn source-btn">
                💻 Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
