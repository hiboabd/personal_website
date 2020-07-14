import React from 'react';
import image from "../images/Hibo_Abdilaahi.jpeg"

function Portfolio() {

  return (
    <div className="portfolio">
      <div className="portfolio-text">
        <h3>  These are some of my favorite projects. </h3>
        <h3>  Check out my Github profile to see more. </h3>
      </div>
      <div className="portfolio-card">

      <div class="row">
        <div class="column">
          <div class="content">
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>

        <div class="column">
          <div class="content">
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>

        <div class="column">
          <div class="content">
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>

        <div class="column">
          <div class="content">
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
