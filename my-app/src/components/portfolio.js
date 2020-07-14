import React from 'react';
import image from "../images/Homepage_mockup.png"
import makersbnb from "../images/MakersBnb.png"
import runboris from "../images/Run_Boris_Run.png"
import dailyguardian from "../images/Daily_Guardian.png"
import banktechtest from "../images/Bank_Tech_Test.png"
import acebook from "../images/Acebook.png"
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

function Portfolio() {

  return (
    <div className="portfolio">
      <div className="portfolio-text">
        <h3>  These are some of my favorite projects. </h3>
        <h3>  Check out my Github profile to see more. </h3>
      </div>
      <>
      <CardDeck>
        <Card bg='info'>
          <Card.Header>This website!</Card.Header>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Text>
              Designed primarily using React and React-Boostrap.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Header>Run, Boris Run!</Card.Header>
          <Card.Img variant="top" src={runboris} />
          <Card.Body>
            <Card.Text>
              A 2D platformer game written purely in Vanilla JavaScript, HTML5
              and CSS. Help Boris Johnson socially distance from passerbys and
              keep his infection rate under 1.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Header>MakersBnb</Card.Header>
          <Card.Img variant="top" src={makersbnb} />
          <Card.Body>
            <Card.Text>
              An AirBnB clone built as part of the Makers Academy week 6 group
              project, written in Ruby and utilising PostgreSQL.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card bg='info'>
          <Card.Header>Daily Guardian</Card.Header>
          <Card.Img variant="top" src={dailyguardian} />
          <Card.Body>
            <Card.Text>
              A frontend, single page app that summarises the top 10 Guardian
              articles daily for your convenience. Written in JavaScript and
              tested with my own testing framework.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Header>Bank Tech Test</Card.Header>
          <Card.Img variant="top" src={banktechtest} />
          <Card.Body>
            <Card.Text>
              An example of my process to approaching a technical problem,
              utilising TDD and good OO design skills.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Header>Acebook</Card.Header>
          <Card.Img variant="top" src={acebook} />
          <Card.Body>
            <Card.Text>
              A social media platform, similar to Facebook, built as part of the
              week 8-9 engineering project. Built using a MERN stack.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      </>

    </div>
  );
}

export default Portfolio;
