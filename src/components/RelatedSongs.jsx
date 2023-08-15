import React from "react";
import SongBar from "./SongBar";

// This functional component renders a list of related songs
const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      {/* Displaying the header title for the related songs section */}
      <h1 className="font-bold text3xl text-white">Related Songs</h1>
      <div className="mt-6 w-full flex flex-col">
        {/* Mapping through the data prop to generate a list of related songs */}
        {data?.map((song, i) => (
          // SongBar component displays individual song details
          <SongBar
            key={`${artistId}-${song.key}-${i}`} // unique key for each rendered element
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
