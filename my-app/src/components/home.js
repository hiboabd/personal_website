import React from 'react';
import image from "../images/Hibo_Abdilaahi.jpeg"
import Typical from 'react-typical'

function Home() {

  return (
    <div className="home-container">
      <div className="home-image">
        <img src={image} alt="Hibo Abdilaahi"/>
      </div>
      <div className="home-text">
          <h1> Hi, I'm Hibo Abdilaahi. </h1>
          <div className="dynamic-text">
            <p>
              <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'Junior Software Developer 💻',
                2000,
                'Food Enthusiast 🍜',
                2000,
                'Blogger 📝',
                2000,
                'Career Changer 🚀',
                2000
              ]}
              />
            </p>
          </div>
      </div>
    </div>
  );
}

export default Home;
