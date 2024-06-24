"use client";
import React from "react";
import styles from "./ProgressBar.module.css";

type ProgressBar = {
    currentTime: number;
    duration: number;
    audioRef: HTMLAudioElement | null;
}

export const ProgressBar: React.FC<ProgressBar> = ({currentTime, duration, audioRef}) => {

	function formatSeconds(seconds : number) : string {
        // Округляем до ближайшего меньшего целого
        const flooredSeconds = Math.floor(seconds);
        // Получаем количество минут
        const minutes = Math.floor(flooredSeconds / 60);
        // Получаем оставшиеся секунды
        const remainingSeconds = flooredSeconds % 60;
        // Форматируем так, чтобы у оставшихся секунд было два знака (например, 08 вместо 8)
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
        return `${minutes}:${formattedSeconds}`;
    }

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