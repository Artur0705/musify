import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

// Controls Component: Displays the media control icons such as play, pause, next, previous, shuffle, and repeat.
// It makes use of conditional rendering based on the props received to display the appropriate state and behavior of the player.
const Controls = ({
  isPlaying, // Indicates if the song is currently playing
  repeat, // Indicates if repeat mode is enabled
  setRepeat, // Setter function to toggle repeat mode
  shuffle, // Indicates if shuffle mode is enabled
  setShuffle, // Setter function to toggle shuffle mode
  currentSongs, // The current list of songs
  handlePlayPause, // Handler function to toggle between play and pause states
  handlePrevSong, // Handler function to play the previous song
  handleNextSong, // Handler function to play the next song
}) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    {/* Repeat Icon: Toggles the repeat mode */}
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />

    {/* Previous Song Icon: Plays the previous song, shown only if there are songs in the list */}
    {currentSongs?.length && (
      <MdSkipPrevious
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handlePrevSong}
      />
    )}

    {/* Play/Pause Icon: Displays the pause icon if a song is playing, and play icon otherwise */}
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}

    {/* Next Song Icon: Plays the next song, shown only if there are songs in the list */}
    {currentSongs?.length && (
      <MdSkipNext
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handleNextSong}
      />
    )}

    {/* Shuffle Icon: Toggles the shuffle mode */}
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;
