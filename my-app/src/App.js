import React from 'react';
import {useTransition, animated } from 'react-spring';
import {Switch, Route, useLocation} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import MyNavbar from "./components/navbar";
import Skills from "./components/skills";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";


function App() {
  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform: "translate(100%, 0)"},
    enter: {opacity: 1, transform: "translate(0%, 0)"},
    leave: {opacity: 0, transform: "translate(-50%, 0)"}
  });

  return (
    <>
      <MyNavbar/>
      <div className="main-container">
        {transitions.map(({ item, props, key}) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/skills" exact component={Skills}/>
              <Route path="/portfolio" exact component={Portfolio}/>
              <Route path="/contact" exact component={Contact}/>
            </Switch>
          </animated.div>
        ))}
      </div>
    </>
  );
}

export default App;
