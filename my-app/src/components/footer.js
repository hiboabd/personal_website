import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render(){

    return (
      <nav>
        <div className="footer">
        <ul>
          <li className="footer-item"><Link style={{ textDecoration: 'none' }} to="/"><h3>Home</h3></Link></li>
          <li className="footer-item"><Link style={{ textDecoration: 'none' }} to="/about"><h3>About Me</h3></Link></li>
          <li className="footer-item"><Link style={{ textDecoration: 'none' }} to="/portfolio"><h3>Portfolio</h3></Link></li>
          <li className="footer-item"><Link style={{ textDecoration: 'none' }} to="/contact"><h3>Contact</h3></Link></li>
        </ul>
        </div>
    </nav>
    );
  }
}
