"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Filter.module.css";
import { Track } from "../Main/Main.types";
import { setFilters, setTracks } from "../../store/features/playerSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import classNames from "classnames";

type FilterProps = {
  allTracks: Track[];
};

const Filter: React.FC<FilterProps> = ({ allTracks }) => {
  // Состояние для фильтрации по исполнителям
  const [toggleExecutors, setToggleExecutors] = useState(false);
  // Состояние для количества выбранных фильтров по исполнителям
  const [arrExecutors, setArrExecutors] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTracks(allTracks));
  }, [dispatch, allTracks]);

  const apiTracks = useAppSelector((state) => state.player.playlist);
  // Используем UseMemo для кэширования значений apiTracks и filterTracks, чтобы избежать лишних вычислений при ререндерах
  const memoizedApiTracks = useMemo(() => apiTracks, [apiTracks]);

  useEffect(() => {
    dispatch(
      setFilters({
        author: arrExecutors,
      })
    );
  }, [arrExecutors, dispatch]);

  // С помощью Set создаем множество с уникальными значениями author
  const unicExecutors = useMemo(() => {
    return [
      ...new Set(
        apiTracks.map((el) => {
          return el.author;
        })
      ),
    ];
  }, [apiTracks]);

  // Функция для изменения состояния по клику на фильтрацию исполнителя
  const handleExecutors = () => {
    setToggleExecutors((prev) => !prev);
    setToggleYears(false);
    setToggleGenres(false);
  };

  // Функция для фильтрации по исполнителю
  const clickExecutor = useCallback(
    (executorName: string) => {
      if (arrExecutors.includes(executorName)) {
        setArrExecutors((prevArr) =>
          prevArr.filter((executor) => executor !== executorName)
        );
        return;
      }
      setArrExecutors((prevArr) => [...prevArr, executorName]);
    },
    [arrExecutors]
  );

  // Состояние для фильтрации по годам
  const [toggleYears, setToggleYears] = useState(false);
  const currentOrder = useAppSelector(
    (state) => state.player.filterOptions.order
  );

  // Функция для изменения состояния по клику на фильтрацию по годам
  const handleYears = () => {
    setToggleYears((prev) => !prev);
    setToggleExecutors(false);
    setToggleGenres(false);
  };
  const clickYears = (year: string) => {
    dispatch(setFilters({ order: year }));
  };

  // Состояние для фильтрации по жанрам
  const [toggleGenres, setToggleGenres] = useState(false);
  // Состояние для количества выбранных фильтров по жанрам
  const [arrGenres, setArrGenres] = useState<string[]>([]);

  useEffect(() => {
    dispatch(
      setFilters({
        genre: arrGenres,
      })
    );
  }, [arrGenres, dispatch]);

  const unicGenres = useMemo(() => {
    return [
      ...new Set(
        apiTracks.map((el) => {
          return el.genre;
        })
      ),
    ];
  }, [apiTracks]);

  // Функция для изменения состояния по клику на фильтрацию жанрам
  const handleGenres = () => {
    setToggleGenres((prev) => !prev);
    setToggleYears(false);
    setToggleExecutors(false);
  };

  const clickGenre = useCallback(
    (genreTitle: string) => {
      if (arrGenres.includes(genreTitle)) {
        setArrGenres((prevArr) =>
          prevArr.filter((genre) => genre !== genreTitle)
        );
        return;
      }
      setArrGenres((prevArr) => [...prevArr, genreTitle]);
    },
    [arrGenres]
  );

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      <div
        className={styles.filter__button}
        onClick={handleExecutors}
        style={{
          borderColor: toggleExecutors ? "#B672FF" : "white",
          color: toggleExecutors ? "#B672FF" : "white",
        }}
      >
        исполнителю
        {arrExecutors.length > 0 && (
          <div className={styles.count_executors}>{arrExecutors.length}</div>
        )}
      </div>
      <div
        className={styles.filter__button}
        onClick={handleYears}
        style={{
          borderColor: toggleYears ? "#B672FF" : "white",
          color: toggleYears ? "#B672FF" : "white",
        }}
      >
        году выпуска
      </div>
      <div
        className={styles.filter__button}
        onClick={handleGenres}
        style={{
          borderColor: toggleGenres ? "#B672FF" : "white",
          color: toggleGenres ? "#B672FF" : "white",
        }}
      >
        жанру
        {arrGenres.length > 0 && (
          <div className={styles.count_executors}>{arrGenres.length}</div>
        )}
      </div>

      {toggleExecutors ? (
        <div className={styles.executors__modal}>
          {unicExecutors.map((el, index) => {
            return (
              <div
                key={index}
                onClick={() => clickExecutor(el)}
                className={classNames(
                  styles.modal_el,
                  arrExecutors.includes(el) && styles.modal_el_active
                )}
              >
                {el}
              </div>
            );
          })}
        </div>
      ) : null}

      {toggleYears ? (
        <div className={styles.years__modal}>
          <div
            onClick={() => clickYears("По умолчанию")}
            className={classNames(
              styles.modal_el,
              currentOrder === "По умолчанию" && styles.modal_el_active
            )}
          >
            По умолчанию
          </div>
          <div
            onClick={() => clickYears("Сначала новые")}
            className={classNames(
              styles.modal_el,
              currentOrder === "Сначала новые" && styles.modal_el_active
            )}
          >
            Сначала новые
          </div>
          <div
            onClick={() => clickYears("Сначала старые")}
            className={classNames(
              styles.modal_el,
              currentOrder === "Сначала старые" && styles.modal_el_active
            )}
          >
            Сначала старые
          </div>
        </div>
      ) : null}

      {toggleGenres ? (
        <div className={styles.genres__modal}>
          {unicGenres.map((el, index) => {
            return (
              <div
                onClick={() => clickGenre(el)}
                key={index}
                className={classNames(
                  styles.modal_el,
                  arrGenres.includes(el) && styles.modal_el_active
                )}
              >
                {el}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Filter);
