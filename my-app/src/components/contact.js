import React from 'react';


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
    <>
      <div className="contact-text">
        <h3> Want to get in touch? </h3>
        <h3> Send me a message! </h3>
      </div>
      <div className="contact-form">

      </div>
      <div className="contact-text">
        <h3> You can also find me here </h3>
      </div>
      <div className="contact-socials">

      </div>
    </>
  );
}

}

export default Contact;
