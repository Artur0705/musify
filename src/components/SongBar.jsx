import React from "react";
import { Link } from "react-router-dom";

import PlayPause from "./PlayPause";

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    // The main wrapper for each song bar.
    // Background changes if the song is the active one being played.
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
        activeSong?.title === song?.title ? "bg-[#4c426e]" : "bg-transparent"
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      {/* Displaying the song's position */}
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>

      <div className="flex-1 flex flex-row justify-between items-center">
        {/* Displaying the song/artist image */}
        <img
          className="w-20 h-20 rounded-lg"
          src={
            artistId
              ? song?.attributes?.artwork?.url
                  .replace("{w}", "125")
                  .replace("{h}", "125")
              : song?.images?.coverart
          }
          alt={song?.title}
        />

        {/* Displaying the song/artist details */}
        <div className="flex-1 flex flex-col justify-center mx-3">
          {!artistId ? (
            // Link to the song's page if an artistId isn't provided
            <Link to={`/songs/${song.key}`}>
              <p className="text-xl font-bold text-white">{song?.title}</p>
            </Link>
          ) : (
            // If artistId is provided, just show the song/artist name without linking
            <p className="text-xl font-bold text-white">
              {song?.attributes?.name}
            </p>
          )}

          {/* Displaying the song's subtitle or album name based on the context (artist or song) */}
          <p className="text-base text-gray-300 mt-1">
            {artistId ? song?.attributes?.albumName : song?.subtitle}
          </p>
        </div>
      </div>

      {/* Play/Pause controls will only be shown if it's in a song context (not when an artistId is provided) */}
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      ) : null}
    </div>
  );
};

export default SongBar;
