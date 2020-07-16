import React from 'react';
import js from '../images/JavaScript.png'
import html from '../images/HTML.png'
import css from '../images/CSS.png'
import ruby from '../images/Ruby.jpeg'

function Skills() {

  return (
    <div className="skills">
      <div className="skills-header">
        <h1> Skills </h1>
        <h3> I have experience with the following technologies </h3>
      </div>
      <div className="lang-container">
        <h3> Languages </h3>
        <img src={js} alt="JavaScript" className="JavaScript" />
        <img src={html} alt="HTML" className="HTML" />
        <img src={css} alt="CSS" className="CSS" />
        <img src={ruby} alt="Ruby" className="Ruby"/>
      </div>
      <div className="fw-container">
        <h3> Frameworks </h3>
      </div>
      <div className="tools-container">
        <h3> Tools </h3>
      </div>
    </div>
  );
}

export default Skills;
