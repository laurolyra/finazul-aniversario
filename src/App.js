import React from "react";
import logo from "./logo.svg";
import * as app from './styled/app';
import "./App.css";

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
        <div className="container">
          <h1>Container</h1>
          <div className="row">
            <app.TextHeader className="col-3">coluna</app.TextHeader>
            <div className="col-3">coluna</div>
            <div className="col-3">coluna</div>
            <div className="col-3">coluna</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
