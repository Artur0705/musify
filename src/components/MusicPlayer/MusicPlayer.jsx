import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import {
  nextSong,
  prevSong,
  playPause,
} from "../../redux/features/playerSlice";
// Child components
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

const MusicPlayer = () => {
  // Extracting necessary state from Redux store
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player);

  // Local state for the component
  const [duration, setDuration] = useState(0); // Duration of the song
  const [seekTime, setSeekTime] = useState(0); // Current time position to seek to
  const [appTime, setAppTime] = useState(0); // Current playback time
  const [volume, setVolume] = useState(0.3); // Playback volume
  const [repeat, setRepeat] = useState(false); // Repeat song toggle
  const [shuffle, setShuffle] = useState(false); // Shuffle songs toggle

  // Redux dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Effect hook to play the song when `currentIndex` changes
  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  // Handler for play/pause functionality
  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  // Handler for moving to the next song
  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  // Handler for moving to the previous song
  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      {/* Displays information about the current song */}
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Media controls - play, pause, next, prev, shuffle, repeat */}
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        {/* Seekbar for song progress */}
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        {/* HTML5 Audio Player */}
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      {/* Volume control */}
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
