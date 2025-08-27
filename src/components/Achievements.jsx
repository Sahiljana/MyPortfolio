// src/components/Achievements.jsx
import React from "react";
import "./Achievements.css";

const milestones = [
  { year: "2023", title: "Achieved Top-3 at Hack2Fest (University Hackathon)" },
  { year: "2024", title: "✅ Microsoft Azure AI Certified" },
  { year: "2025", title: "🚆 Built a Scalable Attendance System" },
];

function Achievements() {
  return (
    <section className="achievements-section">
      <h2 className="section-title">🚀 Achievements</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-card__year">{milestone.year}</div>
            <div className="timeline-card__content">
              <p className="timeline-card__title">{milestone.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
