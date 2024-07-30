"use client";
import { useInitializeLikedTraks } from "../../hooks/likes";
import styles from "./User.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useRouter } from "next/navigation";
import { clearLikedTracks } from "../../store/features/playerSlice";
import { clearAuth, setTokens, setUser } from "@/store/features/authSlice";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export const User = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useInitializeLikedTraks();

  const user = useAppSelector((state) => state.auth.user);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const accessToken = session.accessToken;
      const name = session.user.name;
      const email = session.user.email;

      if (accessToken && name && email) {
        dispatch(setTokens({ accessToken }));
        dispatch(setUser({ name, email }));
      }
    }
  }, [session, dispatch]);


  if (!user) {
    return null;
  }

  const clickLogout = () => {
    dispatch(clearAuth());
    dispatch(clearLikedTracks());
    signOut();
  }

  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name}>{user.name}</p>
      <div className={styles.sidebar__icon}>
        <svg onClick={clickLogout}>
          <use href="/img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
};
