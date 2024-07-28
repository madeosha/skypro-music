"use client";
import Filter from "../../../components/Filter/Filter"
import styles from "../layout.module.css";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Search } from "../../../components/Search/Search";
import { Track } from "../../../components/Main/Main.types";
import { useAppSelector } from "../../../store/store";
import Centerblock from "../../../components/Centerblock/Centerblock";

const FavouritesTracksPage = () => {

    const tracks: Track[] = useAppSelector((state) => state.player.likedTracks);
    let errorMessage: string | null = null;

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

)
}

export default FavouritesTracksPage;