"use client";
import classNames from "classnames";
import styles from "./Player.module.css";
import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Track } from "../Main/Main.types";

type Player = {
  tracks: Track[];
  currentTrack: Track;
  setCurrentTrack: Function;
  currentTrackId: number;
  setCurrentTrackId: Function;
};

export const Player : React.FC<Player> = ({tracks, currentTrack, setCurrentTrack, currentTrackId, setCurrentTrackId}) => {
    // Получаем ссылку на DOM-элемент audio
    const audioRef = useRef<HTMLAudioElement>(null);
    const audio = audioRef.current;

    // Состояние для управления воспроизведением
    const [isPlaying, setIsPlaying] = useState(false);
    // Состояние громкости
    const [isVolume, setIsVolume] = useState("0.5");
    // Состояние текущего времени
    const [currentTime, setCurrentTime] = useState(0);
    // Состояние повтора
    const [isLoop, setIsLoop] = useState(false);

    const duration: number = audio?.duration || 0;
    audio ? audio.loop = isLoop : null;

    // Функция для переключения следующего трека
  const handleEnded = () => {
    // if (currentTrackId < tracks.length - 1) {
    //   if (!isLoop) {
    //     setCurrentTrackId(currentTrackId + 1);
    //     setCurrentTrack(tracks[currentTrackId])
    //   }
    // } else {
    //   setCurrentTrackId(0);
    // }
  }

    // Функция зацикливания трека
    const toggleLoop = () => {
      setIsLoop(!isLoop);
    }

    // Функция для воспроизведения и паузы
    const togglePlay = () => {
      if (audio) {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
      }
      setIsPlaying(!isPlaying);
    }

     // Функция для воспроизведения следующего трека
    const nextTrack = () => {
      setCurrentTrackId((prevCurrentTrackId : number) => prevCurrentTrackId + 1);
      setCurrentTrack(tracks[currentTrackId]);
      if (isPlaying) {
       audio?.play();
      }
    }

    // Функция для воспроизведения предыдущего трека
    const prevTrack = () => {
      setCurrentTrackId(currentTrackId - 1);
      setCurrentTrack(tracks[currentTrackId]);
      if (isPlaying) {
        audio?.play();
      }
    }

    const notDone = () => {
      alert("Еще не реализовано");
    }

    // Меняем громкость при изменении ползунка громкости
    useEffect(() => {
      if (audio) {
        audio.volume = parseFloat(isVolume);
      }
    }, [isVolume, audio]); // была ошибка

    useEffect(() => {
      audio?.addEventListener("ended", handleEnded);
      isPlaying ? audio?.play() : null;
      return () => audio?.removeEventListener("ended", handleEnded);
    }, [currentTrackId, tracks, audio, isPlaying]) //была ошибка
  
    useEffect(() => {
      const audio = audioRef.current;
      setIsPlaying(true);
      audio?.play();
    }, [currentTrack])

    return (
      <div className={styles.bar}>
        <audio
          ref={audioRef}
          src={currentTrack?.track_file}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        />
        <div className={styles.bar__content}>
          <ProgressBar currentTime={currentTime} duration={duration} audioRef={audioRef.current}/>
          <div className={styles.bar__player_block}>
            <div className={styles.bar__player}>
              <div className={styles.player__controls}>
                <div className={styles.player__btn_prev}>
                  <svg onClick={prevTrack} className={classNames(styles.player__btn_prev_svg, styles._btn)}>
                    <use href="img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={styles.player__btn_play}>
                  <svg onClick={togglePlay} className={classNames(styles.player__btn_play_svg, styles._btn)}>
                    {isPlaying ? <use href="img/icon/sprite.svg#icon-pause"></use> : <use href="img/icon/sprite.svg#icon-play"></use>}
                  </svg>
                </div>
                <div className={styles.player__btn_next}>
                  <svg onClick={nextTrack} className={classNames(styles.player__btn_next_svg, styles._btn)}>
                    <use href="img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={classNames(styles.player__btn_repeat, styles._btn_icon)}>
                  <svg onClick={toggleLoop} className={classNames(styles.player__btn_repeat_svg, styles._btn, isLoop ? styles.player__btn_repeat_svg_active : null)}>
                    <use href="img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={classNames(styles.player__btn_shuffle, styles._btn_icon)}>
                  <svg className={styles.player__btn_shuffle_svg}>
                    <use href="img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={classNames(styles.player__track_play, styles.track_play)}>
                <div className={styles.track_play__contain}>
                  <div className={styles.track_play__image}>
                    <svg className={styles.track_play__svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track_play__author}>
                    <a className={styles.track_play__author_link} href="http://">{currentTrack.name}</a>
                  </div>
                  <div className={styles.track_play__album}>
                    <a className={styles.track_play__album_link} href="http://">{currentTrack.author}</a>
                  </div>
                </div>

                <div className={styles.track_play__like_dis}>
                  <div className={classNames(styles.track_play__like, styles._btn_icon)}>
                    <svg className={styles.track_play__like_svg}>
                      <use href="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.track_play__dislike, styles._btn_icon)}>
                    <svg className={styles.track_play__dislike_svg}>
                      <use href="img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(styles.bar__volume_block, styles.volume)}>
              <div className={styles.volume__content}>
                <div className={styles.volume__image}>
                  <svg className={styles.volume__svg}>
                    <use href="img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={classNames(styles.volume__progress, styles._btn)}>
                  <input
                    className={classNames(styles.volume__progress_line, styles._btn)}
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
    )
}