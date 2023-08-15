import React from "react";
// Importing necessary components
import Error from "../components/Error";
import Loader from "../components/Loader";
import ArtistCard from "../components/ArtistCard";
// Importing a custom hook from the Redux toolkit services to fetch the top charts.
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  // Using the custom hook to get top charts data, fetch status, and any possible error.
  const { data, isFetching, error } = useGetTopChartsQuery();

  // If the data is still being fetched, display a loader.
  if (isFetching) return <Loader title="Loading top artists..." />;
  // If there's an error in fetching the data, display the error component.
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      {/* Header for the Top Artists section */}
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>
      {/* Grid or list layout to display the artists. Uses flexbox for responsiveness. */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* Mapping over the fetched data and rendering each artist using the ArtistCard component. */}
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

// Exporting the TopArtists component to be used in other parts of the application.
export default TopArtists;
