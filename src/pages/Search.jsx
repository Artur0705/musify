// Import required modules and components
import React from "react";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";
import { useParams } from "react-router-dom";

// Search component for showing results based on a search term
const Search = () => {
  // Get the search term from the URL parameters
  const { searchTerm } = useParams();

  // Select required player state from Redux store
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // Fetch songs by search term using RTK Query's generated hook
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  // Extract song details from the fetched data
  const songs = data?.tracks?.hits?.map((song) => song.track);

  // Show loading spinner while the data is being fetched
  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  // Display error component in case of any issues during fetch
  if (error) return <Error />;

  // Render the search results
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* Map through the list of songs and render a card for each song */}
        {songs?.map((song, i) => (
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

// Export the Search component for use in other parts of the app
export default Search;
