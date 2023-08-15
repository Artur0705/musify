import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";
import Error from "../components/Error";
import Loader from "../components/Loader";
import RelatedSongs from "../components/RelatedSongs";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  // Extract the artist's ID from the current URL path.
  const { id: artistId } = useParams();

  // Extract player-related state (current song, play status) from the Redux store.
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // Fetch artist details based on the provided artistId using a Redux Toolkit query hook.
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  // If the artist's details are still loading, display a loader component.
  if (isFetchingArtistDetails)
    return <Loader title="Loading artist details..." />;

  // If there's an error in fetching artist details, display an error component.
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      {/* Render the artist's header details using the DetailsHeader component. */}
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />

      {/* Render related songs of the artist using the RelatedSongs component. */}
      <RelatedSongs
        data={artistData?.data[0].views["top-songs"]?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
