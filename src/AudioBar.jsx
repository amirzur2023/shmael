import React from "react";
import { GUESS_TIMES, SHMAEL_DURATION } from "./constants";

const GuessBar = ({
    index, 
    guessIndex
}) => {
    const duration = GUESS_TIMES.slice(0, index + 1).reduce((a, b) => a + b, 0);
    const width = `${(duration / SHMAEL_DURATION) * 100}%`;
    return (
        <div key={index} className="guessBar" style={{
            width: width,
            backgroundColor: (index <= guessIndex) ? "var(--bar-color)" : "var(--active-color)",
            borderRightWidth: (index < GUESS_TIMES.length - 1) ? "1px" : "0px"
        }}></div>
    );
};

const AudioBar = ({
  guessIndex,
  currentPercentage
}) => (
    <div id="trackProgressContainer" className="middle">
        <div id="trackProgress">
            <GuessBar index={6} guessIndex={guessIndex}/>
            <GuessBar index={5} guessIndex={guessIndex}/>
            <GuessBar index={4} guessIndex={guessIndex}/>
            <GuessBar index={3} guessIndex={guessIndex}/>
            <GuessBar index={2} guessIndex={guessIndex}/>
            <GuessBar index={1} guessIndex={guessIndex}/>
            <GuessBar index={0} guessIndex={guessIndex}/>
            <div id="percentage" style={{
                width: currentPercentage
            }}></div>
        </div>
    </div>
);

export default AudioBar;
