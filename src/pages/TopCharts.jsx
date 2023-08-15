import React from "react";
// Importing required hooks and components
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
// Importing a custom hook to fetch the top charts data
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  // Retrieving the active song and playing status from the global state using useSelector
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // Using the custom hook to get top charts data, fetch status, and any possible error
  const { data, isFetching, error } = useGetTopChartsQuery();

  // If the data is still being fetched, display a loader
  if (isFetching) return <Loader title="Loading top charts..." />;
  // If there's an error fetching the data, display the error component
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      {/* Header for the Top Charts section */}
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
      </h2>
      {/* Grid or list layout for songs. Uses flexbox for responsive behavior */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* Mapping over the fetched data and rendering each song using the SongCard component */}
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

// Exporting the TopCharts component to be used elsewhere in the application
export default TopCharts;
