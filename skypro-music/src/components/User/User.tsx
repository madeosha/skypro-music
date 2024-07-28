"use client";
import { useInitializeLikedTraks } from "../../hooks/likes";
import styles from "./User.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setLogout } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

export const User = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useInitializeLikedTraks();

  const userName = useAppSelector((state) => state.auth.user?.username);

  if (!userName) {
    return null;
  }

  const clickLogout = () => {
    dispatch(setLogout());
  }

  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name}>{userName}</p>
      <div className={styles.sidebar__icon}>
        <svg onClick={clickLogout}>
          <use href="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
};
