import React, { useState } from "react";
import "./styles.css";

var text1 = "FUN WITH FLAGS ";

const flagDictionary = {
  "🚩": "Triangular Flag",
  "🏴‍☠️": "Pirate Flag",
  "🇮🏳️": "White Flag",
  "🇮🏳️‍🌈": "Rainbow Flag"
};

var flagsWeKnow = Object.keys(flagDictionary);

export default function App() {
  const [country, setCountry] = useState("");

  function flagHandler(event) {
    var userInput = event.target.value;

    var country = flagDictionary[userInput];
    if (country === undefined) {
      country = "we don't have this in our database";
    }
    setCountry(country);
  }
  function flagClickHandler(flag) {
    var country = flagDictionary[flag];
    setCountry(country);
  }

  return (
    <div className="App">
      <h1>{text1}</h1>

      <input placeholder="give your flagiticon here" onChange={flagHandler} />
      <div>
        <h2> {country}</h2>
      </div>

      <h3>Flags we Know</h3>
      {flagsWeKnow.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={flag}
          >
            {" "}
            {flag}
          </span>
        );
      })}
    </div>
  );
}
