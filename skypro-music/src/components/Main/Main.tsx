"use client";
import React, { useState } from "react";
import { Centerblock } from "../Centerblock/Centerblock";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Main.module.css";
import { Track } from "./Main.types";
import { Player } from "../Player/Player";

type Main = {
    tracks: Track[];
  }

export const Main = ({tracks} : Main) => {
    // Создаем состояние для текущего трека
    const [currentTrack, setCurrentTrack] = React.useState<Track | null>(null);
    // Состояние для ID текущего трека
    const [currentTrackId, setCurrentTrackId] = useState(0);

    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <main className={styles.main}>
                <Menu />
                <Centerblock tracks={tracks} setCurrentTrack={setCurrentTrack} setCurrentTrackId={setCurrentTrackId} />
                <Sidebar />
            </main>
          {currentTrack && <Player tracks={tracks} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} currentTrackId={currentTrackId} setCurrentTrackId={setCurrentTrackId} />}
            <footer className={styles.footer}></footer>
        </div>
      </div>
    )
}