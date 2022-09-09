import React, { useState, useEffect, useRef } from "react";
import { GUESS_TIMES, NO_GUESS } from "./constants";
import "./styles.css";


const SearchBar = ({ tracks, handleTyping, handleSelection, handleClick, search, guess }) => {

  const displayTrack = (track) => (`${track.artist} - ${track.title}`);

  const indexedTracks = tracks.map((track, index) => {
    return {...track, index: index};
  });

  // creates list of buttons for each move in our history
  const options = indexedTracks.filter(track => 
    displayTrack(track).toLowerCase().includes(search.toLowerCase())
  );

  const optionList = options.map((track, index) => {
    return (
      // give list item a unique key corresponding to the move number, 
      // so we can update/remove it easily
      <option key={index} className="searchOption" value={track.index}> 
        {displayTrack(track)}
      </option>
    );
  });

  return (
    <div className="searchBar middle">
      <input className="middle searchInput" value={search} onChange={handleTyping} onClick={handleClick}></input>
      <select className="middle searchSelect" value={guess} onChange={handleSelection}>
        <option className="searchOption" value={NO_GUESS} disabled>Select a track</option>
        {optionList}
      </select>
    </div>
  );
};

export default SearchBar;
