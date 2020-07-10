import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {


  render(){

    return (
      <nav>
        <div className="navbar">
        <ul>
          <li className="navbar-item"><Link style={{ textDecoration: 'none' }} to="/" className="navbar-brand"><h3>Home</h3></Link></li>
          <li className="navbar-item"><Link style={{ textDecoration: 'none' }} to="/about" className="nav-link"><h3>About Me</h3></Link></li>
          <li className="navbar-item"><Link style={{ textDecoration: 'none' }} to="/portfolio" className="nav-link"><h3>Portfolio</h3></Link></li>
          <li className="navbar-item"><Link style={{ textDecoration: 'none' }} to="/contact" className="nav-link"><h3>Contact</h3></Link></li>
        </ul>
        </div>
    </nav>
    );
  }
}
