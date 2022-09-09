import React, { useState, useEffect, useRef } from "react";
import { GUESS_TIMES, SHMAEL_DURATION } from "./constants";
import AudioControls from "./AudioControls";
import AudioBar from "./AudioBar";
import "./styles.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayer = ({ tracks, trackIndex, guessIndex }) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const duration = SHMAEL_DURATION;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const duration = GUESS_TIMES.slice(0, guessIndex + 1).reduce((a, b) => a + b, 0);
      if (audioRef.current.currentTime >= duration) {
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);
        clearInterval(intervalRef.current);

        setIsPlaying(false);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [100]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="shmaelPlayer">
      <AudioBar 
          guessIndex={guessIndex}
          currentPercentage={currentPercentage}
      />
      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
      />
    </div>
  );
};

export default AudioPlayer;
