import React from "react";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // Function to convert time in seconds to a "minutes:seconds" format.
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      {/* Button to decrease the current playback time by 5 seconds. */}
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden lg:mr-4 lg:block text-white"
      >
        -
      </button>
      {/* Display the current playback time in "minutes:seconds" format. */}
      <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
      {/* Range input to represent and control the playback progress. */}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      {/* Display the total duration of the audio in "minutes:seconds" format. */}
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
      {/* Button to increase the current playback time by 5 seconds. */}
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden lg:ml-4 lg:block text-white"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
