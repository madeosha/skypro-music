import React, { act } from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Player } from "./Player";
import { Track } from "../Main/Main.types";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playerSlice";

// Тип для корневого состояния Redux
interface RootState {
  player: {
    currentPlaylist: Track[];
    currentTrack: Track | null;
    isPlaying: boolean;
    isShuffle: boolean;
  };
}

const mockStore = configureStore<RootState>([]);

describe("Корректный рендер компонента Player", () => {
  let store: MockStoreEnhanced<RootState>;
  let initialState: RootState;

  beforeEach(() => {
    initialState = {
      player: {
        currentPlaylist: [
          {
            id: 1,
            name: "Track 1",
            author: "Artist 1",
            release_date: "2022-01-01",
            genre: "Genre 1",
            duration_in_seconds: 210,
            album: "Album 1",
            logo: "/path/to/logo1.png",
            track_file: "/path/to/track1.mp3",
            stared_user: [],
          },
          {
            id: 2,
            name: "Track 2",
            author: "Artist 2",
            release_date: "2022-01-02",
            genre: "Genre 2",
            duration_in_seconds: 180,
            album: "Album 2",
            logo: "/path/to/logo2.png",
            track_file: "/path/to/track2.mp3",
            stared_user: [],
          },
        ],
        currentTrack: {
          id: 1,
          name: "Track 1",
          author: "Artist 1",
          release_date: "2022-01-01",
          genre: "Genre 1",
          duration_in_seconds: 210,
          album: "Album 1",
          logo: "/path/to/logo1.png",
          track_file: "/path/to/track1.mp3",
          stared_user: [],
        },
        isPlaying: false,
        isShuffle: false,
      },
    };

    store = mockStore(initialState);
  });

  it("Корректный рендер компонента Player", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Player />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Переключение следующего трека", () => {
    store.dispatch(setIsPlaying(true));

    const component = renderer.create(
      <Provider store={store}>
        <Player />
      </Provider>
    );

    // Имитируем клик на кнопку следующего трека
    const nextTrackClick = component.root.findByProps({
      "data-testid": "next-track-button",
    });
    act(() => {
      nextTrackClick.props.onClick();
    });
    // Ожидаем, что после клика будет вызван setCurrentTrack с ожидаемым следующим треком
    const expectedNextTrack = store.getState().player.currentPlaylist[1];
    const actions = store.getActions();
    const setCurrentTrackAction = actions.find(
      (action) => action.type === setCurrentTrack.type
    );
    expect(setCurrentTrackAction.payload).toEqual(expectedNextTrack);
  });
});
