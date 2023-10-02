// Remove the import statement for React since it is already imported below
import Logo from './Logo';
import './App.css'; // Create a CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
         <Logo />
        </div>
        <div className="buttons">
          <button>Home</button>
          <button>Works</button>
          <button>About</button>
          <button>Contact</button>
          <button>Login</button>
        </div>
      </header>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default App;