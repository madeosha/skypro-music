"use client";
import Filter from "../Filter/Filter";
import { Search } from "../Search/Search";
import styles from "./Centerblock.module.css";
import classNames from "classnames";
import React from "react";
import { Track } from "../Main/Main.types";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../store/features/playerSlice";
import { useAppSelector } from "../../store/store";

type CenterblockProps = {
  allTracks: Track[];
  error: string | null;
  isLoading: boolean;
}

const Centerblock = ({ allTracks, error, isLoading } : CenterblockProps) => {
  const dispatch = useDispatch();
  // Вытаскивает текущий трек из глобального состояния
  const currentTrack = useAppSelector((state) => state.player.currentTrack);
  // Вытаскиваем состояние проигрывания из глобального состояния
  const isPlaying = useAppSelector((state) => state.player.isPlaying);

  // Функция конвертации секунд в формат с минутами
  const convertSecondsToTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const time = min + ":" + (sec < 10 ? "0" : "") + sec;
    return time;
  };

  return (
    <>
    {/*  <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter apiTracks={apiTracks} /> */}
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classNames(styles.playlist_title__col, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlist_title__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlist_title__col, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlist_title__col, styles.col04)}>
            <svg className={styles.playlist_title__svg}>
              <use href="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className={styles.content__playlist}>
          {allTracks.map((track) => {
            return (
              <div
                onClick={() => {
                  dispatch(setCurrentTrack(track));
                }}
                key={track.id}
                className={styles.playlist__item}
              >
                <div className={styles.playlist__track}>
                  <div className={styles.track__title}>
                    <div className={styles.track__title_image}>
                      {track.id === currentTrack?.id ? (
                        <div
                          className={classNames(
                            styles.playing_dot,
                            isPlaying ? styles.playing_dot_animation : null
                          )}
                        ></div>
                      ) : (
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      )}
                    </div>
                    <div className={styles.track__title_text}>
                      <a className={styles.track__title_link}>
                        {track.name}
                        <span className={styles.track__title_span}></span>
                      </a>
                    </div>
                  </div>
                  <div className={styles.track__author}>
                    <a className={styles.track__author_link} href="http://">
                      {track.author}
                    </a>
                  </div>
                  <div className={styles.track__album}>
                    <a className={styles.track__album_link} href="http://">
                      {track.album}
                    </a>
                  </div>
                  <div className={styles.track__time}>
                    <svg className={styles.track__time_svg}>
                      <use href="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className={styles.track__time_text}>
                      {convertSecondsToTime(track.duration_in_seconds)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(Centerblock);
