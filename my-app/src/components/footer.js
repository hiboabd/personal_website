import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
  render(){

    return (
      <nav>
        <div className="footer">
        <ul>
          <li className="footer-item">
            <SocialIcon url="https://github.com/hiboabd/CV" />
          </li>
          <li className="footer-item">
            <SocialIcon url="https://www.linkedin.com/in/hibo-abdilaahi-68405017b/" />
          </li>
          <li className="footer-item">
            <SocialIcon url="http://twitter.com/Hibocodes" />
          </li>
        </ul>
        </div>
    </nav>
    );
  }
}
