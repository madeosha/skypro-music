import { Track } from "../../components/Main/Main.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playerStateType = {
  isPlaying: boolean;
  currentTrack: Track | null;
  playlist: Track[];
  isShuffle: boolean;
  filterOptions: {
    author: string[];
    genre: string[];
    order: string;
    searchString: string;
  };
  filterPlaylist: Track[];
  currentPlaylist: Track[];
};

const initialState: playerStateType = {
  isPlaying: false,
  currentTrack: null,
  playlist: [],
  isShuffle: false,
  filterOptions: {
    author: [],
    genre: [],
    order: "По умолчанию",
    searchString: "",
  },
  filterPlaylist: [],
  currentPlaylist: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<Track[]>) => {
      state.playlist = action.payload;
      state.filterPlaylist = action.payload;
    },
    setCurrentTracks: (state, action: PayloadAction<Track[]>) => {
      state.currentPlaylist = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
      if (state.isShuffle) {
        const copyFilterPlaylist = [...state.filterPlaylist];
        state.currentPlaylist = copyFilterPlaylist.sort(
          () => 0.5 - Math.random()
        );
      } else {
        state.currentPlaylist = state.filterPlaylist;
      }
    },
    setFilters: (
      state,
      action: PayloadAction<{
        author?: string[];
        genre?: string[];
        order?: string;
        searchString?: string;
      }>
    ) => {
      state.filterOptions = {
        author: action.payload.author || state.filterOptions.author,
        genre: action.payload.genre || state.filterOptions.genre,
        order: action.payload.order || state.filterOptions.order,
        searchString:
          action.payload.searchString || state.filterOptions.searchString,
      };

      const filterTracks = [...state.playlist].filter((track) => {
        const hasSearchString = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchString.toLowerCase());
        // Если выбрали фильтр по автору, то проверяем трек на соотвествие этим авторам
        // Если фильтр по автору не выбран, то возвращаем этот трек, так как нам нужно вывести все треки
        const hasAuthor =
          state.filterOptions.author.length > 0
            ? state.filterOptions.author.includes(track.author)
            : true;
        const hasGenre =
          state.filterOptions.genre.length > 0
            ? state.filterOptions.genre.includes(track.genre)
            : true;
        return hasSearchString && hasAuthor && hasGenre;
      });

      switch (state.filterOptions.order) {
        case "Сначала новые":
          filterTracks.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filterTracks.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );

        default:
          break;
      }
      state.filterPlaylist = filterTracks;
      state.currentPlaylist = filterTracks;
    },
  },
});

export const {
  setTracks,
  setCurrentTracks,
  setCurrentTrack,
  setIsPlaying,
  setIsShuffle,
  setFilters,
} = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
