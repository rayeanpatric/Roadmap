// Remove the import statement for React since it is already imported below
import Logo from './Componants/Logo';
import './App.css'; // Create a CSS file for styling

function App() {
  const handleClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
         <Logo />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('Home')}>Home</button>
          <button onClick={() => handleClick('Works')}>Works</button>
          <button onClick={() => handleClick('About')}>About</button>
          <button onClick={() => handleClick('Contact')}>Contact</button>
          <button onClick={() => handleClick('Login')}>Login</button>
        </div>
      </header>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
}


export default App;