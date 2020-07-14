import React from 'react';
import image from "../images/Hibo_Abdilaahi.jpeg"
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
      <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>This website!</Card.Title>
            <Card.Text>
              Designed primarily using React and React-Boostrap.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Run, Boris Run!</Card.Title>
            <Card.Text>
              A 2D platformer game written purely in Vanilla JavaScript, HTML5
              and CSS. Help Boris Johnson socially distance from passerbys and
              keep his infection rate under 1.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>MakersBnb</Card.Title>
            <Card.Text>
              An AirBnB clone built as part of the Makers Academy week 6 group
              project, written in Ruby and utilising PostgreSQL.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br/>
      <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Daily Guardian</Card.Title>
            <Card.Text>
              A frontend, single page app that summarises the top 10 Guardian
              articles daily for your convenience. Written in JavaScript and
              tested with my own testing framework.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Bank Tech Test</Card.Title>
            <Card.Text>
              An example of my process to approaching a technical problem,
              utilising TDD and good OO design skills.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Acebook</Card.Title>
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
