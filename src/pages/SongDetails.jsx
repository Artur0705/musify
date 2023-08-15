import React from "react";
// Import necessary Redux utilities and React-Router's useParams hook.
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// Import related components.
import DetailsHeader from "../components/DetailsHeader";
import Error from "../components/Error";
import Loader from "../components/Loader";
import RelatedSongs from "../components/RelatedSongs";
// Import action creators and selectors from Redux toolkit slice and services.
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  // Access the Redux store's dispatch function.
  const dispatch = useDispatch();
  // Get song ID from the URL params.
  const { songid } = useParams();
  // Get active song and playing status from Redux store.
  const { actvieSong, isPlaying } = useSelector((state) => state.player);
  // Fetch song details using the provided song ID.
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  // Fetch related songs using the provided song ID.
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });

  // Handle pause click event.
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  // Handle play click event and set the clicked song as the active song.
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // Show loader when fetching song details or related songs.
  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Searching song details..." />;
  // Show error component if there's an error during fetching.
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {/* Display lyrics if found, else display a message stating no lyrics were found. */}
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics found!
            </p>
          )}
        </div>
      </div>
      {/* Display related songs and pass down necessary props and handlers. */}
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        actvieSong={actvieSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

// Export the SongDetails component for use in other parts of the application.
export default SongDetails;
