import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

// This functional component is responsible for rendering either a pause or play button
// depending on the current song being played.
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  // Check if the current song is playing and it matches the song title passed as prop
  isPlaying && activeSong?.title === song.title ? (
    // If the song is currently playing, render the pause button
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    // Else, render the play button
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
