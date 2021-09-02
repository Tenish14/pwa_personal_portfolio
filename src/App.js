import React from "react";
import TopNav from "./TopNav"
import { BrowserRouter as Router } from "react-router-dom"
import background  from "./images/background.jpg";
import Typewriter from "typewriter-effect";
import "./App.css";

function App() {

  return (
    <Router>
      <div className="App">
        <TopNav />
        
        <div style={{
          backgroundImage: `url(${background})`, 
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "93.8vh",
          position: "relative"
        }} className="d-flex align-items-center justify-content-center">
          <div className="text-center text-white">
            <h1 className="text-white">I am Tenish from Malaysia</h1>
            <div className="type-effect">
            <Typewriter
              options={{
                strings: ['Programmer', 'Developer', 'Freelancer'],
                autoStart: true,
                loop: true,
              }}
            />
            </div>
            
          </div>
          
        </div>
      </div>
    </Router>
    
  );
}

export default App;
