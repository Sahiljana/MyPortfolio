// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "VS Code"],
  },
  {
    category: "ML/AI",
    items: ["TensorFlow", "Pandas", "Numpy", "OpenCV", "Matplotlib", "Scikit-learn"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Firebase", "MongoDB", "Express.js"],
  },
];

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div className="skills-card" key={index}>
            <h3 className="skills-card__title">{skillCategory.category}</h3>
            <div className="skills-card__items">
              {skillCategory.items.map((skill, i) => (
                <span className="skills-card__item" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
