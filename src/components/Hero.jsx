// src/components/Hero.jsx

import React from "react";
import mypic from "../assets/mypic.jpg";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__header">
        <h1 className="hero__title">
          Hi, I'm <span>Sahil Jana</span>
        </h1>
        <img src={mypic} alt="Sahil" className="hero__pic" />
      </div>

      <TypeAnimation
        sequence={[
          "Full-Stack Developer 💻",
          2000,
          "Machine Learning Explorer 🤖",
          2000,
          "AI Explorer 🤖",
          2000,
          "Innovator. Coder. Thinker. 🧠",
          2000,
        ]}
        wrapper="span"
        repeat={Infinity}
        className="hero__subtitle"
      />

      <p className="hero-desc">
        Full-stack & ML engineering student with strong problem-solving, quick adaptability, and teamwork skills, driven to deliver innovative solutions.
      </p>

      <div className="hero-buttons">
        <a
          href="https://github.com/SahilJana"
          target="_blank"
          rel="noreferrer"
          className="hero-btn"
        >
          🌐 GitHub
        </a>
        <a
          href="/SahilJana_Resume.pdf"
          download="SahilJana_Resume.pdf"
          className="hero-btn primary"
        >
          📄 Download Resume
        </a>
      </div>

      <div className="hero-boxes">
        
        <div className="hero-box">
          <a
            href="https://www.linkedin.com/in/sahiljana/"
            target="_blank"
            rel="noreferrer"
            className="hero-box__link"
          >
            🔗 LinkedIn
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
