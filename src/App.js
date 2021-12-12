import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Calc from './components/Calc';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero years="3" cashBack={20}/>
      <Calc />
    </div>
  );
}

export default App;
