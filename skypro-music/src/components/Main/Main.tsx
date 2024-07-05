//"use client";
//import React, { useEffect, useMemo, useState } from "react";
//import { Menu } from "../Menu/Menu";
//import { Sidebar } from "../Sidebar/Sidebar";
//import styles from "./Main.module.css";
//import { Track } from "./Main.types";
//import { useAppSelector } from "@/store/store";
//import { Player } from "../Player/Player";
//import { useDispatch } from "react-redux";
//import { setCurrentTracks, setTracks } from "../../store/features/playerSlice";
//import Centerblock from "../Centerblock/Centerblock";

//type Main = {
//  tracks: Track[];
//};

//export const Main = ({ tracks }: Main) => {
//  const dispatch = useDispatch();

//  useEffect(() => {
//    dispatch(setTracks(tracks));
//    dispatch(setCurrentTracks(tracks));
//  }, [tracks, dispatch]);

//  return (
//    <div className={styles.wrapper}>
//      <div className={styles.container}>
//        <main className={styles.main}>
//          <Menu />
//          <Centerblock />
//          <Sidebar />
//        </main>
//        {currentTrack && <Player />}
//        <footer className={styles.footer}></footer>
//      </div>
//    </div>
//  );
//};
