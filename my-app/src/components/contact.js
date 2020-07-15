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

  handleChange = (event) => {

    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
        disabled: true
    });
  };

render () {
  return (
    <div className="contact-page">
      <div className="contact-text">
        <h3> Want to get in touch? </h3>
        <h3> Send me a message! </h3>
      </div>
      <div className="contact-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
                name="name"
                type="text"
                placeholder="Enter name"
                value={this.state.name}
                onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" as="textarea" rows="5" placeholder="Enter message" value={this.state.message} onChange={this.handleChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" disabled={this.state.disabled}>
            Submit
          </Button>

          {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
          {this.state.emailSent === false && <p className="d-inline err-msg">Oops! Email Not Sent!</p>}
        </Form>
      </div>
    </div>
  );
}

}

export default Contact;
