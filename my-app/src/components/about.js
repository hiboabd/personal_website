import React from 'react';
import hibo from '../images/Hibo_Abdilaahi.jpeg'

function About() {
  return (
    <div className="about">
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

        <p> I love to
          ... turn an idea into a product
          ... build things anybody can use
          ... inspire others to take up coding </p>

        <p> I'm ready to contribute my skills and improve upon them in a
        professional setting. </p>
      </div>
      <div className="about-text2">
        <p> Are you hiring or know somebody that is? If so, contact me! </p>

        <p> Or... take a peek at some of my favourites projects on my portfolio page! </p>
      </div>
    </div>
  )
}

export default About;
