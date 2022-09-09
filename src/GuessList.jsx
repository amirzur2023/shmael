import React, { useState, useEffect, useRef } from "react";
import { GUESS_TIMES } from "./constants";
import "./styles.css";

const GuessList = ({ guesses }) => {
  // creates list of buttons for each move in our history
  const guessList = GUESS_TIMES.map((time, index) => {
    return (
      // give list item a unique key corresponding to the move number, 
      // so we can update/remove it easily
      <li key={index} className="guessItem"> 
        {(index < guesses.length) ? guesses[index] : ""}
      </li>
    );
  });

  return (
    <div className="middle guessListContainer">
        <ul className="guessList">{guessList}</ul>
    </div>
  );
};

export default GuessList;
