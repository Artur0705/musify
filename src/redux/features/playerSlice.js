import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [], // Tracks the current list of songs
  currentIndex: 0, // Tracks the index of the currently playing song
  isActive: false, // Determines if a song is active or not
  isPlaying: false, // Determines if a song is playing or paused
  activeSong: {}, // Stores the currently active song details
  genreListId: "", // Stores the currently selected genre ID
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      // Update the active song and potentially the current song list.
      state.activeSong = action.payload.song;

      // Depending on the payload structure, update the current song list accordingly.
      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      // Update the active song to the next song in the list.
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      // Update the active song to the previous song in the list.
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      // Toggle the play/pause state based on the payload.
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      // Update the genreListId to the selected genre.
      state.genreListId = action.payload;
    },
  },
});

// Export the actions for use in components.
export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

// Export the reducer to be used in the Redux store.
export default playerSlice.reducer;
