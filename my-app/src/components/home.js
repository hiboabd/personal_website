import React from 'react';
import image from "../Hibo_Abdilaahi.jpeg"

function Home() {

  return (
    <div className="home-container">
      <div className="home-image">
        <img src={image} alt="Hibo Abdilaahi"/>
      </div>
      <div className="home-text">
          <h1> Hi, I'm Hibo Abdilaahi. </h1>
          <div className="dynamic-text">
            <p> Junior software developer.</p>
          </div>
      </div>
    </div>
  );
}

export default Home;
