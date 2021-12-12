import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Calc from './components/Calc';
import Concept from './components/Concept';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Calc />
      <Concept />
    </div>
  );
}

export default App;
