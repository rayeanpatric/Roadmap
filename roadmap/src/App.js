import React from 'react';
import Logo from './logo';
import './App.css'; // Create a CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
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