import React from 'react';
// importing all images needed
import js from '../images/JavaScript.png'
import html from '../images/HTML.png'
import css from '../images/CSS.png'
import ruby from '../images/Ruby.jpeg'

import express from '../images/node-express.png'
import react from '../images/React.jpg'
import bootstrap from '../images/Bootstrap.png'
import sinatra from '../images/Sinatra.png'

import rspec from '../images/Rspec.png'
import jasmine from '../images/Jasmine.png'
import jest from '../images/Rspec.png'

import github from '../images/Github.png'
import mongodb from '../images/Mongodb.png'
import postgresql from '../images/PostgreSQL.png'
import netlify from '../images/Netlify.png'
import node from '../images/Node.png'

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
      <div className="testing-container">
        <h3> Testing </h3>

      </div>
      <div className="tools-container">
        <h3> Tools </h3>

      </div>
    </div>
  );
}

export default Skills;
