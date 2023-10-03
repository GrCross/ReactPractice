import React, { useState } from "react";
import "./App.css";

//Import components
import Toggler from "./components/Toggler";
import Filter from "./components/Filter";
import Counter from "./components/Counter";
import Cards from "./components/Cards";

function App() {
  const sampleList = [
    "banana",
    "apple",
    "mango",
    "orange",
    "kiwi",
    "pineapple",
  ];

  return (
    <div class="home">
      <h1 class="tittle">Taller React</h1>
      <div class="homeBody">
        <div class="contentBox">
          <Toggler></Toggler>
        </div>
        <div class="contentBox">
          <Filter filterList={sampleList}></Filter>
        </div>
        <div class="contentBox">
          <Counter></Counter>
        </div>
        <div class="contentBox">
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}

export default App;
