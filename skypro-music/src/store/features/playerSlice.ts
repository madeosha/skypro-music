import { Track } from "../../components/Main/Main.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playerStateType = {
  isPlaying: boolean;
  currentTrack: Track | null;
  tracks: Track[];
  tracksShuffle: Track[];
  isShuffle: boolean;
  tracksOrigin: Track[];
};

const initialState: playerStateType = {
  isPlaying: false,
  currentTrack: null,
  tracks: [],
  tracksShuffle: [],
  isShuffle: false,
  tracksOrigin: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setTracksOrigin: (state, action: PayloadAction<Track[]>) => {
      state.tracksOrigin = action.payload;
    },
    setTracksShuffle: (state, action: PayloadAction<Track[]>) => {
      state.tracksShuffle = action.payload;
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
    },
  },
});

export const {
  setTracks,
  setCurrentTrack,
  setIsPlaying,
  setTracksOrigin,
  setTracksShuffle,
  setIsShuffle,
} = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
