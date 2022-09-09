import React, { useState, useEffect, useRef } from "react";
import { SKIP, NO_GUESS } from "./constants";
import AudioPlayer from "./ShmaelPlayer";
import GuessList from "./GuessList";
import SearchBar from "./SearchBar";
import DistributionPlot from "./DistributionChart";
import { ReactComponent as Distribution } from "./assets/distribution.svg";
import "./styles.css";


const Shmael = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [search, setSearch] = useState("");
  const [guess, setGuess] = useState(NO_GUESS);
  const [showDistribution, setShowDistribution] = useState(false);

  const displayTrack = (track) => (`${track.artist} - ${track.title}`);

  const skipGuess = () => {
    // setGuessIndex(guessIndex + 1);
    setGuesses(guesses.concat([SKIP]));
  };

  const submitGuess = () => {
    if (guess == trackIndex) {
      console.log("Whoohoo!");
    } else {
      setGuesses(guesses.concat([displayTrack(tracks[guess])])); 
    }
    setSearch("");
    setGuess(NO_GUESS);
  };

  const handleTyping = (event) => {
    setSearch(event.target.value);
    setGuess(NO_GUESS);
  };

  const handleSelection = (event) => {
    setSearch(displayTrack(tracks[event.target.value]));
    setGuess(event.target.value);
  };

  const clearText = () => {
    if (guess != NO_GUESS) {
      setSearch("");
      setGuess(NO_GUESS);
    }
  };

  const handleDistribution = () => {
    setShowDistribution(!showDistribution);
  };

  return (
    <div className="shmael">
      <h1>Shmael</h1>
      <button onClick={handleDistribution} className="searchButton" style={{
        height: "40px",
        width: "40px"
      }}><Distribution/></button>
      <DistributionPlot 
        counts={[2, 3, 4, 1, 0, 6]}
        show={showDistribution}
      />
      <GuessList 
        guesses={guesses}
      />
      <AudioPlayer 
        tracks={tracks}
        guessIndex={guesses.length}
        trackIndex={trackIndex}
      />
      <SearchBar 
        tracks={tracks}
        handleTyping={handleTyping}
        handleSelection={handleSelection}
        handleClick={clearText}
        search={search}
        guess={guess}
      />
      
      <div className="middle searchButtonsContainer">
        <button onClick={skipGuess} className="searchButton skip">
          skip
        </button>
        <button onClick={submitGuess} className="searchButton submit" style={{
          visibility: (guess == NO_GUESS) ? "hidden" : "visible"
        }}>
          submit
        </button>
      </div>
    </div>
  );
};

export default Shmael;
