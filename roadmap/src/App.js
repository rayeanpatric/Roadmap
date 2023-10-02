import React from 'react';
<<<<<<< HEAD
import Logo from './Logo.js';
=======
import Logo from "./Logo";
>>>>>>> 80b521b54b8030e680e079c9793072256cb00120
import './App.css'; // Create a CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
         <Logo />
        </div>
        <div className="buttons">
          <button>Login</button>
          <button>Other Button</button>
        </div>
      </header>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default App;
