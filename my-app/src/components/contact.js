import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

render () {
  return (
    <div className="contact-page">
      <div className="contact-text">
        <h3> Want to get in touch? </h3>
        <h3> Send me a message! </h3>
      </div>
      <div className="contact-form">
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Enter message" value={this.state.message} onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={this.state.disabled}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

}

export default Contact;
