"use client";
import { useInitializeLikedTraks } from "../../hooks/likes";
import styles from "./User.module.css";
import { useAppSelector } from "../../store/store";

export const User = () => {
  useInitializeLikedTraks();

  const userName = useAppSelector((state) => state.auth.user?.username);

  if (!userName) {
    return null;
  }

  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name}>{userName}</p>
      <div className={styles.sidebar__icon}>
        <svg>
          <use href="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
};
