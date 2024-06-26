"use client";
import React, { useState } from "react";
import styles from "./Filter.module.css";
import { Track } from "../Main/Main.types";

type FilterProps = {
    tracksList: Track[];
  };

export const Filter: React.FC<FilterProps> = ({ tracksList }) => {
    // Состояние для фильтрации по исполнителям
  const [toggleExecutors, setToggleExecutors] = useState(false);
  // С помощью Set создаем множество с уникальными значениями author
  const unicExecutors = [
    ...new Set(
      tracksList.map((el) => {
        return el.author;
      })
    ),
  ];
  // Функция для изменения состояния по клику на фильтрацию исполнителя
  const handleExecutors = () => {
    setToggleExecutors((prev) => !prev);
    setToggleYears(false);
    setToggleGenres(false);
  };
  // Состояние для фильтрации по годам
  const [toggleYears, setToggleYears] = useState(false);
  // Функция для изменения состояния по клику на фильтрацию по годам
  const handleYears = () => {
    setToggleYears((prev) => !prev);
    setToggleExecutors(false);
    setToggleGenres(false);
  };
   // Состояние для фильтрации по жанрам
   const [toggleGenres, setToggleGenres] = useState(false);

   const unicGenres = [
     ...new Set(
       tracksList.map((el) => {
         return el.genre;
       })
     ),
   ];
   // Функция для изменения состояния по клику на фильтрацию жанрам
   const handleGenres = () => {
     setToggleGenres((prev) => !prev);
     setToggleYears(false);
     setToggleExecutors(false);
   };

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
            </div>

            {toggleExecutors ? (
        <div className={styles.executors__modal}>
          {unicExecutors.map((el, index) => {
            return (
              <div key={index} className={styles.modal_el}>
                {el}
              </div>
            );
          })}
        </div>
      ) : null}

      {toggleYears ? (
        <div className={styles.years__modal}>
          <div className={styles.modal_el}>По умолчанию</div>
          <div className={styles.modal_el}>Сначала новые</div>
          <div className={styles.modal_el}>Сначала старые</div>
        </div>
      ) : null}

      {toggleGenres ? (
        <div className={styles.genres__modal}>
          {unicGenres.map((el, index) => {
            return (
              <div key={index} className={styles.modal_el}>
                {el}
              </div>
            );
          })}
        </div>
      ) : null}
        </div>
    );
};