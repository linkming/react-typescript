import './App.css';
import React from "react"; 
import Content from './views/content'
import Foot from './views/footer'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Content></Content>
      <Foot></Foot>
      </header>
    </div>
  );
}

export default App;
