import React from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { genres } from "../assets/constants";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  // Extract relevant state (current song, play status, selected genre) from the Redux store.
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );

  // Fetch songs based on the selected genre using a Redux Toolkit query hook.
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "HIP_HOP_RAP"
  );

  const dispatch = useDispatch();

  // Show loader while fetching.
  if (isFetching) return <Loader title="Loading Songs ..." />;

  // Display an error component in case of any fetch errors.
  if (error) return <Error />;

  // Find the genre title that matches the selected genreListId from the constants.
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      {/* Genre title and dropdown section */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        {/* Dropdown to select a genre. On change, it updates the genre in the Redux store. */}
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "hip-hop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      {/* Songs grid section */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            i={i}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
