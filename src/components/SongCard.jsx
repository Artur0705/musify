import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  // Function to dispatch a pause action
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  // Function to set the active song and dispatch a play action
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    // Main wrapper for the Song Card
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      {/* {Wrapper for the song image and play/pause overlay} */}
      <div className="relative w-full h-56 group">
        {/* {Conditional overlay for play/pause button based on song play status} */}
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        {/* The song's image */}
        <img
          alt="song_img"
          src={song.images?.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>
      {/* {Details (title and subtitle) about the song} */}
      <div className="mt-4 flex flex-col">
        {/* {Song title linking to its details page} */}
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        {/* Subtitle (typically artist's name) linking to the artist's page or a
        fallback link */}
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
