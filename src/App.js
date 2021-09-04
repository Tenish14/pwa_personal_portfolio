import React from "react";
import TopNav from "./TopNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";
import HomePage from "./components/Homepage";

function App() {

  return (
    <Router>
      <div className="App">
        <TopNav />

        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>

          <Route path="/project">
              <Project />
          </Route>
          
          <Route path="/contact">
              <Contact />
          </Route>

          <Route path="/skills">
              <Skills />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        
      </div>
    </Router>

    
  );
}

export default App;
