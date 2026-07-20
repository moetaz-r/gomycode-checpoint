import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Greeting name={"Ameni"} />
      <Counter />
    </div>
  );
}

export default App;
