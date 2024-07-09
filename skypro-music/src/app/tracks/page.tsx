"use client";
import Centerblock from "../../components/Centerblock/Centerblock";
import Filter from "../../components/Filter/Filter";
import styles from "./layout.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useMemo, useState } from "react";
import { getTracks } from "../../api/tracksApi";
import { Track } from "../../components/Main/Main.types";
import { setCurrentTracks, setTracks } from "../../store/features/playerSlice";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Search } from "../../components/Search/Search";

const MainTracksPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const apiTracks = useAppSelector((state) => state.player.playlist);
  const filterTracks = useAppSelector((state) => state.player.filterPlaylist);

  // Используем UseMemo для кэширования значений apiTracks и filterTracks, чтобы избежать лишних вычислений при ререндерах
  const memoizedApiTracks = useMemo(() => apiTracks, [apiTracks]);
  const memoizedFilterTracks = useMemo(() => filterTracks, [filterTracks]);

  useEffect(() => {
    getTracks()
      .then((response: Track[]) => {
        dispatch(setTracks(response));
        dispatch(setCurrentTracks(response));
        setIsLoading(true);
      })
      .catch(() => {
        setError("Ошибка загрузки треков");
      });
  }, [dispatch]);

  return (
    <>
      <div className={styles.main__centerblock}>
        <Search />
        <h2 className={styles.centerblock__h2}>Треки</h2>
        <Filter apiTracks={memoizedApiTracks} />
        <Centerblock
          allTracks={memoizedFilterTracks}
          error={error}
          isLoading={isLoading}
        />
      </div>
      <Sidebar />
    </>
  );
};

export default MainTracksPage;
