import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";


function App() {

  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/contact" exact component={Contact}/>
      <Footer/>
    </Router>
  );
}

export default App;
