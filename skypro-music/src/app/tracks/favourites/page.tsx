"use client";
import styles from "../layout.module.css";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Search } from "../../../components/Search/Search";
import { Track } from "../../../components/Main/Main.types";
import { useAppSelector } from "@/store/store";
import Filter from "@/components/Filter/Filter";
import Centerblock from "@/components/Centerblock/Centerblock";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FavouritesTracksPage = () => {
  const tracks: Track[] = useAppSelector((state) => state.player.likedTracks);
  let errorMessage: string | null = null;

  const router = useRouter();
  const logged = useAppSelector((state) => state.auth.tokens.access);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized && !logged) {
      router.push("/tracks");
    }
  }, [logged, isInitialized, router]);
 
  return (
    <>
      <div className={styles.main__centerblock}>
        <Search />
        <h2 className={styles.centerblock__h2}>Мои треки</h2>
        <Filter allTracks={tracks} />
        <Centerblock allTracks={tracks} errorMessage={errorMessage} />
      </div>
      <Sidebar />
    </>
  );
};

export default FavouritesTracksPage;
