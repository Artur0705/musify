import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  // Importing the GEO API Key from environment variables.
  const GeoApiKey = import.meta.env.VITE_GEO_API_KEY;

  // State variables for managing country and loading state.
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);

  // Extract player-related state from Redux store.
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // Fetch songs based on the country using a Redux Toolkit query hook.
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    // Fetching the user's country based on their IP address.
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${GeoApiKey}`)
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  // If both API calls are loading, display a loader.
  if (isFetching && loading)
    return <Loader title="Loading songs around you..." />;

  // If there's an error and country is set (i.e., the API has been called), display an error component.
  if (error && country !== "") return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* Mapping through the fetched songs and rendering each song with the SongCard component. */}
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

export default AroundYou;
