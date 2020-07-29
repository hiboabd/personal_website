import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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

    axios({
      method: "POST",
      url:"https://hibo-abdilaahi-backend.herokuapp.com/new",
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    }).then((response)=>{
      console.log(response)
        if (response.data.msg === 'success'){
            alert("Thank you! Your message was sent and I will be in touch as soon as possible");
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Unfortunately, your message failed to send. Please try again or email me at hiboabdilaahi@gmail.com")
        }
    })
  };

  resetForm(){
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

render () {
  return (
    <div className="contact-page">
      <div className="contact-text">
        <h1> Contact </h1>
        <h3> Want to get in touch? Send me a message! </h3>
        <p> Or email me directly at hiboabdilaahi@gmail.com </p>
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
        </Form>
      </div>
    </div>
  );
}

}

export default Contact;
