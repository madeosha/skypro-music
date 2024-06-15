"use client";
import { Filter } from "../Filter/Filter";
import { Search } from "../Search/Search";
import styles from "./Centerblock.module.css";
import classNames from 'classnames';
import React, { useEffect, useState } from "react";
import { Track } from "./Centerblock.types";
import { getTracks } from "../../api/tracksApi";

export const Centerblock = () => {
  // Создаем состояние для списка треков
  const [tracksList, setTracksList] = useState<Track[]>([]);
  // Выводим треки при загрузке странциы
  useEffect(() => {
    getTracks()
      .then((response) => {
        setTracksList(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

    return (
    <div className={styles.main_centerblock}>
            <Search />
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <Filter tracksList={tracksList}/>
            <div className={styles.centerblock__content}>
              <div className={styles.content__title}>
                <div className={classNames(styles.playlist_title__col, styles.col01)}>Трек</div>
                <div className={classNames(styles.playlist_title__col, styles.col02)}>Исполнитель</div>
                <div className={classNames(styles.playlist_title__col, styles.col03)}>Альбом</div>
                <div className={classNames(styles.playlist_title__col, styles.col04)}>
                  <svg className={styles.playlist_title__svg}>
                    <use href="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className={styles.content__playlist}>
                {tracksList.map((track) => {
                  return (
                    <div key={track.id} className={styles.playlist__item}>
                      <div className={styles.playlist__track}>
                        <div className={styles.track__title}>
                          <div className={styles.track__title_image}>
                            <svg className={styles.track__title_svg}>
                              <use href="img/icon/sprite.svg#icon-note"></use>
                            </svg>
                          </div>
                         <div className={styles.track__title_text}>
                            <a className={styles.track__title_link} href="http://">
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
                            {track.duration_in_seconds}
                          </span>
                        </div>
                      </div>
                    </div>
                   );
                })}
              </div>
            </div>
          </div>
);
}

