import React, { useRef, useEffect } from "react";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  // A reference to access the audio DOM element directly.
  const ref = useRef(null);

  // If the audio DOM element is available,
  if (ref.current) {
    // play the song if isPlaying is true
    if (isPlaying) {
      ref.current.play();
    }
    // pause the song if isPlaying is false
    else {
      ref.current.pause();
    }
  }

  // Whenever volume changes, update the volume of the audio player.
  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  // Whenever seekTime changes, update the currentTime of the audio player.
  // This essentially allows you to seek to different parts of the audio.
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    // This is the actual HTML5 audio player.
    <audio
      // Source of the song. Navigating through the activeSong object to get the URI.
      src={activeSong?.hub?.actions[1]?.uri}
      // ref is linked to the audio element to access its properties and methods.
      ref={ref}
      // Determines if the audio should play in a loop.
      loop={repeat}
      // Event listeners for various audio events.
      onEnded={onEnded} // Fired when playback completes.
      onTimeUpdate={onTimeUpdate} // Fired when the time changes during playback.
      onLoadedData={onLoadedData} // Fired when audio data has been completely loaded.
    />
  );
};

export default Player;
