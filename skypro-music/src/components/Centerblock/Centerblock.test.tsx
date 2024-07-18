import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Centerblock from "./Centerblock";
import { Track } from "../Main/Main.types";

// Создаем mock store
const mockStore = configureStore([]);

describe("Корректный рендер компонента Centerblock", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      player: {
        currentTrack: null,
        isPlaying: false,
      },
    });
  });

  const allTracks: Track[] = [
    {
      id: 1,
      name: "Track 1",
      author: "Author 1",
      release_date: "2023-01-01",
      genre: "Pop",
      duration_in_seconds: 180,
      album: "Album 1",
      logo: "path/to/logo1.jpg",
      track_file: "path/to/track1.mp3",
      stared_user: ["user1"],
    },
    {
      id: 2,
      name: "Track 2",
      author: "Author 2",
      release_date: "2023-02-01",
      genre: "Rock",
      duration_in_seconds: 200,
      album: "Album 2",
      logo: "path/to/logo2.jpg",
      track_file: "path/to/track2.mp3",
      stared_user: ["user2", "user3"],
    },
  ];

  it("Корректный рендер компонента Centerblock с треками", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Centerblock allTracks={allTracks} error={null} isLoading={false} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Дополнительный тест для проверки рендера состояния загрузки", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Centerblock allTracks={[]} error={null} isLoading={true} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
