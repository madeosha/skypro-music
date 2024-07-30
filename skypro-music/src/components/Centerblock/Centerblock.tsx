"use client";
import styles from "./Centerblock.module.css";
import classNames from "classnames";
import React, { useEffect, useMemo } from "react";
import { Track } from "../Main/Main.types";
import { useDispatch } from "react-redux";
import { setCurrentTrack, setTracks } from "../../store/features/playerSlice";
import { useAppSelector } from "../../store/store";
import TrackItem from "../Track/Track";

type CenterblockProps = {
  allTracks: Track[];
  errorMessage: string | null;
};

const Centerblock = ({ allTracks, errorMessage }: CenterblockProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTracks(allTracks));
  }, [dispatch, allTracks]);

  // Вытаскивает текущий трек из глобального состояния
  const currentTrack = useAppSelector((state) => state.player.currentTrack);
  // Вытаскиваем состояние проигрывания из глобального состояния
  const isPlaying = useAppSelector((state) => state.player.isPlaying);

  const filterTracks = useAppSelector((state) => state.player.filterPlaylist);
  const memoizedFilterTracks = useMemo(() => filterTracks, [filterTracks]);

  return (
    <>
      {errorMessage ? (
        errorMessage
      ) : (
        <div className={styles.centerblock__content}>
          <div className={styles.content__title}>
            <div
              className={classNames(styles.playlist_title__col, styles.col01)}
            >
              Трек
            </div>
            <div
              className={classNames(styles.playlist_title__col, styles.col02)}
            >
              Исполнитель
            </div>
            <div
              className={classNames(styles.playlist_title__col, styles.col03)}
            >
              Альбом
            </div>
            <div
              className={classNames(styles.playlist_title__col, styles.col04)}
            >
              <svg className={styles.playlist_title__svg}>
                <use href="/img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          <div className={styles.content__playlist}>
            {memoizedFilterTracks.length > 0 ? (
              memoizedFilterTracks.map((track) => {
                return (
                  <TrackItem
                    key={track.id}
                    track={track}
                    isCurrentTrack={track.id === currentTrack?.id}
                    isPlaying={isPlaying}
                    onClick={() => dispatch(setCurrentTrack(track))}
                  />
                );
              })
            ) : (
              <span>Треки не найдены</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Centerblock);
