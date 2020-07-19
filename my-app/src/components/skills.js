import React from 'react';
// importing all images needed
import js from '../images/JavaScript.png'
import html from '../images/HTML.png'
import css from '../images/CSS.png'
import ruby from '../images/Ruby.png'

import express from '../images/node-express.png'
import react from '../images/React.png'
import bootstrap from '../images/Bootstrap.png'

import rspec from '../images/Rspec.png'
import jasmine from '../images/Jasmine.png'
import jest from '../images/Jest.png'

import github from '../images/Github.png'
import postgresql from '../images/PostgreSQL.png'
import travisCI from '../images/travis-ci.png'
import netlify from '../images/Netlify.png'

function Skills() {

  return (
    <div className="skills">
      <div className="skills-header">
        <h1> Skills </h1>
        <h3> I have experience with the following technologies </h3>
      </div>
      <div className="lang-container">
        <h3> Languages </h3>
        <div className="skills-images">
          <img src={js} alt="JavaScript" />
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS"/>
          <img src={ruby} alt="Ruby"/>
        </div>
      </div>
      <div className="fw-container">
        <h3> Frameworks </h3>
        <div className="skills-images">
          <img src={express} alt="Express" />
          <img src={react} alt="React" />
          <img src={bootstrap} alt="Bootsrap"/>
        </div>
      </div>
      <div className="testing-container">
        <h3> Testing </h3>
        <div className="skills-images">
          <img src={rspec} alt="RSpec" />
          <img src={jasmine} alt="Jasmine" />
          <img src={jest} alt="Jest"/>
        </div>
      </div>
      <div className="tools-container">
        <h3> Tools </h3>
        <div className="skills-images">
          <img src={github} alt="Github" />
          <img src={postgresql} alt="Mongodb" />
          <img src={netlify} alt="Netlify"/>
          <img src={travisCI} alt="TravisCI"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
