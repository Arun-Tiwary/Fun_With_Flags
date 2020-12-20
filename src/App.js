import React, { useState } from "react";
import "./styles.css";

var text1 = "FUN WITH FLAGS ";

const flagDictionary = {};

export default function App() {
  const [country, setCountry] = useState("");

  function flagHandler(event) {
    var userInput = event.target.value;

    var country = flagDictionary[userInput];
    if (country === undefined) {
      country = "we don't have this in our database";
    }
  }

  return (
    <div className="App">
      <h1>{text1}</h1>

      <input onChange={flagHandler} />
    </div>
  );
}
