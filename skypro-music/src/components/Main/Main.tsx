"use client";
import React, { useState } from "react";
import { Centerblock } from "../Centerblock/Centerblock";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Main.module.css";
import { Track } from "./Main.types";
import { useAppSelector } from "@/store/store";
import { Player } from "../Player/Player";

type Main = {
  tracks: Track[];
};

export const Main = ({ tracks }: Main) => {
  /// Вытаскиваем состояние текущего трека
  const currentTrack = useAppSelector((state) => state.player.currentTrack);
  // Состояние для ID текущего трека
  const [currentTrackId, setCurrentTrackId] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Menu />
          <Centerblock tracks={tracks} />
          <Sidebar />
        </main>
        {currentTrack && <Player />}
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
