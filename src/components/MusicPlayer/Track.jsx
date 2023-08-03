import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    {/* Container for the cover art */}
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
      } hidden sm:block h-16 w-16 mr-4`}
    >
      {/* Cover art image */}
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    {/* Container for the song title and subtitle */}
    <div className="w-[50%]">
      {/* Song title */}
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      {/* Song subtitle */}
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
