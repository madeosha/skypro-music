"use client";
import styles from "./layout.module.css";
import { Menu } from "../../components/Menu/Menu";
import { Player } from "../../components/Player/Player";
import { useAppSelector } from "../../store/store";
import { useInitializeLikedTraks } from "@/hooks/likes";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Вытаскиваем состояние текущего трека
  const currentTrack = useAppSelector((state) => state.player.currentTrack);
  useInitializeLikedTraks();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Menu />
          {children}
        </main>
        {currentTrack && <Player />}
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
