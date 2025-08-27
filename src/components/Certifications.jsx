import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Microsoft Azure-AI Fundamentals AI-900",
    org: "Microsoft",
    link: "https://learn.microsoft.com/en-gb/users/sahiljana-9199/credentials?wt.mc_id=certnurture_eml14_email_wwl&source=docs&tab=credentials-tab",
  },
  
  {
    title: "Introduction to Generative AI for Data Analysis",
    org: "Microsoft",
    link: "https://www.coursera.org/account/accomplishments/verify/P6M8GIGXLLX2",
  },
  {
    title: "Java FullStack Developer",
    org: "Board Infinity via Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/TCK8KQ5M63E9",
  },
  {
    title: "Python for Everybody",
    org: "University of Michigan via Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/7LKEJQGE5QQU",
  },
  {
    title: "Python for Data Science, AI & Development",
    org: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/XS4SB32A8XFR",
  },
  {
    title: "Machine Learning for All",
    org: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/NRMFEPS27DBX",
  },
  {
    title: "Foundations of Digital Marketing and E-commerce",
    org: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/CTCVWJ7Z629M",
  },
  {
    title: "SQL: A Practical Introduction for Querying Databases",
    org: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/3ZKAZF4RRP4A",
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="section-title">📚 Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.org}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
