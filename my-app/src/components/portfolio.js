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
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
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
      </CardDeck>
      <br/>
      <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='info'>
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
      </CardDeck>
      </>

    </div>
  );
}

export default Portfolio;
