"use client";
import styles from "./User.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { clearLikedTracks } from "../../store/features/playerSlice";
import { useEffect } from "react";
import { setLogout, setToken, setUser } from "@/store/features/authSlice";

export const User = () => {
  const dispatch = useAppDispatch();

  // Функция для извлечения данных из LocalStorage
  const loadUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  const loadTokensFromLocalStorage = () => {
    const accessTokenLS = localStorage.getItem("access_token");
    const refreshTokenLS = localStorage.getItem("refresh_token");

    const tokens = {
      access: accessTokenLS || null,
      refresh: refreshTokenLS || null,
    };
    return tokens ? tokens : null;
  };

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const storedUser = loadUserFromLocalStorage();
    if (storedUser) {
      dispatch(setUser(storedUser));
    }

    const storedToken = loadTokensFromLocalStorage();
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

  if (!user) {
    return null;
  }

  const clickLogout = () => {
    dispatch(setLogout());
    dispatch(clearLikedTracks());
  }

  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name}>{user.username}</p>
      <div className={styles.sidebar__icon}>
        <svg onClick={clickLogout}>
          <use href="/img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
};
