import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Forms from "./Forms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br/>
      <br/>
      <br/>
      <br/>
      <Counter/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Forms/>

        <br/>
        <br/>
        <br/>
        <br/>

    </div>
  );
}

export default App;
