import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "./AudioPlayer";
import Shmael from "./Shmael";
import ShmaelPlayer from "./ShmaelPlayer"
import tracks from "./tracks";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Shmael tracks={tracks} />
  </React.StrictMode>,
  rootElement
);
