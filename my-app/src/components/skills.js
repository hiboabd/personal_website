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
      <div className="skills-card">
        <div className="skills-images">

          <div className="skills-individual-images">
          <img src={js} alt="JavaScript" />
          </div>

          <div className="skills-individual-images">
          <img src={html} alt="HTML" />
          </div>
          <div className="skills-individual-images">
          <img src={css} alt="CSS"/>
          </div>
          <div className="skills-individual-images">
          <img src={ruby} alt="Ruby"/>
          </div>
          <div className="skills-individual-images">
          <img src={express} alt="Express" />
          </div>


          <div className="skills-individual-images">
          <img src={react} alt="React" />
          </div>
          <div className="skills-individual-images">
          <img src={bootstrap} alt="Bootsrap"/>
          </div>
          <div className="skills-individual-images">
          <img src={rspec} alt="RSpec" />
          </div>
          <div className="skills-individual-images">
          <img src={jasmine} alt="Jasmine" />
          </div>
          <div className="skills-individual-images">
          <img src={jest} alt="Jest"/>
          </div>


          <div className="skills-individual-images">
          <img src={github} alt="Github" />
          </div>
          <div className="skills-individual-images">
          <img src={postgresql} alt="Mongodb" />
          </div>
          <div className="skills-individual-images">
          <img src={netlify} alt="Netlify"/>
          </div>
          <div className="skills-individual-images">
          <img src={travisCI} alt="TravisCI"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
