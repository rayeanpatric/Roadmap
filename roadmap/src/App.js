import React from 'react';
import './App.css';
import Logo from "./Componants/Logo";
import ImageComponent from "./Componants/Image";
import Personalized from './Componants/Features/Personalized';
import Profiling from './Componants/Features/Profiling';
import ML from './Componants/Features/ML';
import Explore from './Componants/Features/Explore';

function App() {
  const handleClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked`);
    if (buttonName !== 'Login') {
      const element = document.getElementById(buttonName.toLowerCase());
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="Logo">
            <Logo />
          </div>
          <div className="buttons right">
            <button onClick={() => handleClick('Home')}>Home</button>
            <button onClick={() => handleClick('Features')}>Features</button>
            <button onClick={() => handleClick('About')}>About</button>
            <button onClick={() => handleClick('Contact')}>Contact</button>
            <button onClick={() => handleClick('Login')}>Login</button>
          </div>
        </nav>
      </header>

      <div className="content">
        <div id="home">
          <h1>CEREBRO</h1>
          <h2>Personalized Learning RoadMap</h2>
          <p><strong>“The Best way to Shine in Future is to Create it.” </strong></p>
          <p>Let's create a simple and engaging way to help students grasp tricky concepts with ease.</p>
        </div>

        <div className="Image">
           <ImageComponent />
          </div>

        <div id="features">
          <h1>FEATURES</h1>

          <div className="feature1">
          <div className="personalized">
           <Personalized />
           </div>
           <div className="content1">
            <p>AI-powered personalized learning is a student-centered approach that uses AI to tailor learning experiences to individual needs, interests, and pace. </p>
          </div>
           </div>

           <div className="feature2">
           <div className="content2">
            <p>Personalized learning is an educational approach that aims to customize learning for each student's strengths, needs, skills, and interests</p>
          </div>
           <div className="profiling">
           <Profiling />
           </div>
           </div>

           <div className="feature3">
           <div className="ml">
           <ML />
           </div>
           <div className="content3">
            <p>Personalized learning is an educational approach that aims to customize learning for each student's strengths, needs, skills, and interests</p>
          </div>
           </div>

           <div className="feature4">
           <div className="content4">
            <p>Personalized learning is an educational approach that aims to customize learning for each student's strengths, needs, skills, and interests</p>
          </div>
          <div className="explore">
           <Explore />
           </div>
        </div>

        <div id="about">
          <h1>ABOUT</h1>
          <div className="aboutCont">
          <p>Personalized learning is an educational approach that aims to customize learning for each student's strengths, needs, skills, and interests</p>
          </div>
          {/* About content goes here */}
        </div>

        <div id="contact">
          {/* Contact content goes here */}
        </div>
        
        <div id="login">
          {/* Login content goes here */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;