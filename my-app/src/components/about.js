import React from 'react';
import Card from 'react-bootstrap/Card'
import hibo from '../images/Hibo_Abdilaahi.jpeg'
import github from '../images/Github.png'
import twitter from '../images/Twitter.png'
import linkedin from '../images/Linkedin.png'
import devto from '../images/dev.png'

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1> About Me </h1>
      </div>
      <div className="about-image">
        <img src={hibo} alt="Hibo Abdilaahi" />
      </div>
        <div className="about-text">
        <p> I'm a Junior Developer who recently graduated from Makers Academy,
        one of the top coding bootcamps in the world! </p>

        <p> I spent two years working in Market Research but I had a curiosity for code
        and after undertaking the CodeFirst:Girls 'Introduction to Web Development'
        evening course after work, I decided to stop saying and start doing. </p>

        <p> Four months later, I've learnt the ins and outs of front and back end
        web development as well as the principles of object oriented programming. </p>
      </div>
      <div className="about-text2">
      <p> Want to know more? Here's where you can find me! </p>
        <div className="about-text2-icons">
          <a href="https://github.com/hiboabd">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/hibo-abdilaahi/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/hibocodes">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://dev.to/hiboabd">
            <img src={devto} alt="Dev.to" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;
