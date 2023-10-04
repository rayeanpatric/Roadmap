import React from 'react';
import './App.css';
import Logo from "./Componants/Logo";
import ImageComponent from "./Componants/Image";

function App() {
  const handleClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked`);
    if (buttonName !== 'Login') {
      const element = document.getElementById(buttonName.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
         <Logo />
        </div>
        <div className="buttons">
           <button onClick={() => handleClick('Home')}>Home</button>
           <button onClick={() => handleClick('Features')}>Features</button>
           <button onClick={() => handleClick('About')}>About</button>
           <button onClick={() => handleClick('Contact')}>Contact</button>
           <button onClick={() => handleClick('Login')}>Login</button>
        </div>
      </header>
      <div className="content">
        <div id="home">
          <h1>CEREBRO</h1>
          <h2>Personalized Learning RoadMap</h2>
          <p><strong>“The Best way to Shine in Future is to Create it.” </strong></p>
          <p>Let's create a simple and engaging way to help students grasp tricky concepts with ease.</p>
          <div className="Image">
           <ImageComponent />
          </div>
          <p id='sub'>Unique Way to Learn</p>
          {/* Home content goes here */}
        </div>
        <div id="features">
          
          {/* Works content goes here */}
        </div>
        <div id="about">
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
  );
}

export default App;