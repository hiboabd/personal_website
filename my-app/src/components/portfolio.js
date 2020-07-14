import React from 'react';
import image from "../images/Hibo_Abdilaahi.jpeg"
import CardGroup from 'react-bootstrap/Card'
import Card from 'react-bootstrap/Card'

function Portfolio() {

  return (
    <div className="portfolio">
      <div className="portfolio-text">
        <h3>  These are some of my favorite projects. </h3>
        <h3>  Check out my Github profile to see more. </h3>
      </div>

      <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </>

    </div>
  );
}

export default Portfolio;
