import './App.css';
import React from "react"; 
import Home from './views/home'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Home></Home>
      </header>
    </div>
  );
}

export default App;
