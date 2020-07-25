import React from 'react';
import Typical from 'react-typical'

function Home() {

  return (
    <div className="home-container">
      <div className="home-text">
          <h1> HI, I'M HIBO ABDILAAHI. </h1>
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
