import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => (
  // Container for the header
  <div className="relative w-full flex flex-col">
    {/* Gradient background, responsible for creating a fade effect */}
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
    {/* Container for the profile/cover image and associated details */}
    <div className="absolute inset-0 flex items-center">
      {/* Image: If it's an artist, use the artist's artwork; otherwise use the
      song's coverart */}
      <img
        alt="profile"
        src={
          artistId
            ? artistData?.attributes?.artwork?.url
                .replace("{w}", "500")
                .replace("{h}", "500")
            : songData?.images?.coverart
        }
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />
      {/* Text container next to the image */}
      <div className="ml-5">
        {/* {Display the artist name or the song title based on the data provided} */}
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artistData?.attributes?.name : songData?.title}
        </p>
        {/* {If it's a song, display the song's artist name (subtitle) and link to
        the artist's page} */}
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
        {/* Display the genre of the artist or song */}
        <p className="text-base text-gray-400 mt-2">
          {artistId
            ? artistData?.attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>
    {/* Spacer to maintain layout structure */}
    <div className="w-full sm:h-44 h-24" />
  </div>
);

export default DetailsHeader;
