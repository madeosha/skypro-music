"use client";
import classNames from "classnames";
import styles from "./Player.module.css";
import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useAppSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import {
  setCurrentTrack,
  setIsPlaying,
  setIsShuffle,
} from "../../store/features/playerSlice";
import { useLikeTrack } from "../../hooks/likeTrack";

export const Player = () => {
  // Получаем ссылку на DOM-элемент audio
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio = audioRef.current;
  const dispatch = useDispatch();
  // Вытаскивает текущий плейлист из глобального состояния
  const currentTrackList = useAppSelector(
    (state) => state.player.currentPlaylist
  );
  // Вытаскивает оригинальный плейлист из глобального состояния
  const originTrackList = useAppSelector((state) => state.player.currentTrack);
  // Вытаскиваем состояние текущего трека
  const currentTrack = useAppSelector((state) => state.player.currentTrack);
  const { isLiked, handleLike } = currentTrack
    ? useLikeTrack(currentTrack)
    : { isLiked: false, handleLike: () => {} };
  // Находим индекс текущего трека
  const currentTrackIndex = currentTrackList.findIndex(
    (track) => track.id === currentTrack?.id
  );
  // Состояние плеера из глобального состояния
  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  // Состояние режима перемешивания из глобального состояния
  const isShuffle = useAppSelector((state) => state.player.isShuffle);
  // Состояние громкости
  const [isVolume, setIsVolume] = useState("0.5");
  // Состояние текущего времени
  const [currentTime, setCurrentTime] = useState(0);
  // Состояние повтора
  const [isLoop, setIsLoop] = useState(false);
  const duration: number = audio?.duration || 0;
  audio ? (audio.loop = isLoop) : null;
  // Функция для переключения следующего трека
  const handleEnded = () => {
    nextTrackClick();
  };
  // Функция зацикливания трека
  const toggleLoop = () => {
    setIsLoop(!isLoop);
  };
  // Функция для включения режима перемешивания
  const toggleShuffle = () => {
    dispatch(setIsShuffle(!isShuffle));
  };
  // Функция для воспроизведения и паузы
  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
    dispatch(setIsPlaying(!isPlaying));
  };
  // Функция для воспроизведения следующего трека
  const nextTrackClick = () => {
    if (currentTrackIndex < currentTrackList.length - 1) {
      const nextTrack = currentTrackList[currentTrackIndex + 1];
      dispatch(setCurrentTrack(nextTrack));
    }
  };
  // Функция для воспроизведения предыдущего трека
  const prevTrackClick = () => {
    if (currentTrackIndex !== 0) {
      const prevTrack = currentTrackList[currentTrackIndex - 1];
      dispatch(setCurrentTrack(prevTrack));
    }
  };
  // Меняем громкость при изменении ползунка громкости
  useEffect(() => {
    if (audio) {
      audio.volume = parseFloat(isVolume);
    }
  }, [isVolume, audio]); // была ошибка
  useEffect(() => {
    const audio = audioRef.current;
    audio?.addEventListener("ended", handleEnded);
    dispatch(setIsPlaying(true));
    audio?.play();
    return () => audio?.removeEventListener("ended", handleEnded);
  }, [currentTrack]);

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={currentTrack?.track_file}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      />
      <div className={styles.bar__content}>
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          audioRef={audioRef.current}
        />
        <div className={styles.bar__player_block}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div className={styles.player__btn_prev}>
                <svg
                  onClick={prevTrackClick}
                  className={classNames(
                    styles.player__btn_prev_svg,
                    styles._btn
                  )}
                >
                  <use href="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div className={styles.player__btn_play}>
                <svg
                  onClick={togglePlay}
                  className={classNames(
                    styles.player__btn_play_svg,
                    styles._btn
                  )}
                >
                  {isPlaying ? (
                    <use href="/img/icon/sprite.svg#icon-pause"></use>
                  ) : (
                    <use href="/img/icon/sprite.svg#icon-play"></use>
                  )}
                </svg>
              </div>
              <div className={styles.player__btn_next}>
                <svg
                  data-testid="next-track-button"
                  onClick={nextTrackClick}
                  className={classNames(
                    styles.player__btn_next_svg,
                    styles._btn
                  )}
                >
                  <use href="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div
                className={classNames(
                  styles.player__btn_repeat,
                  styles._btn_icon
                )}
              >
                <svg
                  onClick={toggleLoop}
                  className={classNames(
                    styles.player__btn_repeat_svg,
                    styles._btn,
                    isLoop ? styles.player__btn_repeat_svg_active : null
                  )}
                >
                  <use href="/img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div
                className={classNames(
                  styles.player__btn_shuffle,
                  styles._btn_icon
                )}
              >
                <svg
                  onClick={toggleShuffle}
                  className={classNames(
                    styles.player__btn_shuffle_svg,
                    isShuffle ? styles.player__btn_shuffle_svg_active : null
                  )}
                >
                  <use href="/img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div
              className={classNames(
                styles.player__track_play,
                styles.track_play
              )}
            >
              <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                  <svg className={styles.track_play__svg}>
                    <use href="/img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.track_play__author}>
                  <a className={styles.track_play__author_link} href="http://">
                    {currentTrack?.name}
                  </a>
                </div>
                <div className={styles.track_play__album}>
                  <a className={styles.track_play__album_link} href="http://">
                    {currentTrack?.author}
                  </a>
                </div>
              </div>

              <div className={styles.track_play__like_dis}>
                <div
                  className={classNames(
                    styles.track_play__like,
                    styles._btn_icon
                  )}
                >
                  <svg
                    className={styles.track_play__like_svg}
                    onClick={handleLike}
                  >
                    <use
                      href={
                        isLiked
                          ? "/img/icon/sprite.svg#icon-dislike"
                          : "/img/icon/sprite.svg#icon-like"
                      }
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.bar__volume_block, styles.volume)}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg className={styles.volume__svg}>
                  <use href="/img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={classNames(styles.volume__progress, styles._btn)}>
                <input
                  className={classNames(
                    styles.volume__progress_line,
                    styles._btn
                  )}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isVolume}
                  onChange={(e) => setIsVolume(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
