import { useLikeTrack } from "@/hooks/likeTrack";
import styles from "../Centerblock/Centerblock.module.css";
import classNames from "classnames";
import { Track } from "../Main/Main.types";
import { MouseEventHandler, useEffect } from "react";
import { useAppSelector } from "@/store/store";

type TrackProps = {
    track: Track;
    isCurrentTrack: boolean | null;
    isPlaying: boolean;
    onClick: MouseEventHandler;
  }

const TrackItem = ({ track, isCurrentTrack, isPlaying, onClick }: TrackProps) => {
    const { isLiked, handleLike } = useLikeTrack(track);

    return (
      <div
        onClick={onClick}
        className={styles.playlist__item}
        data-testid="track-item"
      >
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isCurrentTrack ? (
                <div
                  className={classNames(
                    styles.playing_dot,
                    isPlaying ? styles.playing_dot_animation : null
                  )}
                ></div>
              ) : (
                <svg className={styles.track__title_svg}>
                  <use href="/img/icon/sprite.svg#icon-note"></use>
                </svg>
              )}
            </div>
            <div className={styles.track__title_text} data-testid="track-name">
              <a className={styles.track__title_link}>
                {track.name}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author} data-testid="track-author">
            <a className={styles.track__author_link} href="http://">
              {track.author}
            </a>
          </div>
          <div className={styles.track__album} data-testid="track-album">
            <a className={styles.track__album_link} href="http://">
              {track.album}
            </a>
          </div>
          <div className={styles.track__time} data-testid="track-duration">
            <svg className={styles.track__time_svg} onClick={(e) => {
              e.stopPropagation();
              handleLike(e);
            }}>
              <use href={isLiked ? "/img/icon/sprite.svg#icon-dislike" : "/img/icon/sprite.svg#icon-like"}></use>
            </svg>
            <span className={styles.track__time_text}>
              {convertSecondsToTime(track.duration_in_seconds)}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Функция конвертации секунд в формат с минутами
  const convertSecondsToTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const time = min + ":" + (sec < 10 ? "0" : "") + sec;
    return time;
  };

export default TrackItem;