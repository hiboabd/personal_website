import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home}/>
    </Router>
  );
}

export default App;
