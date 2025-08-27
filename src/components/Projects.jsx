import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Attendance 2.0",
    description:
      "Attendance 2.0 is an OpenCV-based system that uses real-time facial recognition to mark attendance automatically.",
    tech: ["Python", "Pandas", "OpenCV", "TensorFlow", "React Native"],
    link: "https://github.com/Sahiljana/Attendence_2.0",
  },
  {
    title: "Joydo Todo App",
    description:
      "A fun and friendly to-do app that keeps your tasks in check with calendars, due dates, and a memory that never forgets—thanks to local storage!",
    tech: ["React", "Context API", "Tailwind CSS"],
    link: "https://joydobysahiljana.vercel.app/",
  },
  {
    title: "My Portfolio App",
    description: "A personal portfolio showcasing my projects, skills, and resume.",
    tech: ["React", "Context API", "Tailwind CSS", "Formspree"],
    link: "https://my-portfolio-mocha-beta-26.vercel.app/",
  },
  {
    title: "Your Own Password Generator",
    description:
      "A sleek and secure password generator built with React and Tailwind, giving you strong, custom passwords at the click of a button.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit"],
    link: "https://react-begins.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">My Projects</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((tech, i) => (
                <span className="project-card__tech-item" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
