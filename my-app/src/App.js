import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {

  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Footer/>
    </Router>
  );
}

export default App;
