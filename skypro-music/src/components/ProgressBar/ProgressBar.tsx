"use client";
import React from "react";
import styles from "./ProgressBar.module.css";
import { formatSeconds } from "@/utils/formatSeconds";

type ProgressBar = {
    currentTime: number;
    duration: number;
    audioRef: HTMLAudioElement | null;
}

export const ProgressBar: React.FC<ProgressBar> = ({currentTime, duration, audioRef}) => {

	return (
		<div className={styles.bar__player_progress}>
            <div className={styles.bar__currentTime}>
                {formatSeconds(currentTime)} / {formatSeconds(duration)}
            </div>
            <input 
              className={styles.styledProgressInput}
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              step={0.01}
              onChange={(e) => audioRef ? audioRef.currentTime = parseFloat(e.target.value) : null}
            />
        </div>
  	);
}