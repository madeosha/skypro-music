"use client";
import { useCallback, useState } from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../store/features/playerSlice";

export const Search = () => {
  const [valueInput, setValueInput] = useState("");

  const dispatch = useDispatch();

  const handleSearch = useCallback(
    async (value: string) => {
      setValueInput(value);
      dispatch(
        setFilters({
          searchString: value,
        })
      );
    },
    [dispatch]
  );
    return (
        <div className={styles.centerblock__search}>
              <svg className={styles.search__svg}>
                <use href="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className={styles.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
                value={valueInput}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
    )
}