"use client";
import Filter from "../../../components/Filter/Filter"
import styles from "../layout.module.css";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Search } from "../../../components/Search/Search";
import { Track } from "../../../components/Main/Main.types";
import { useAppSelector } from "../../../store/store";
import Centerblock from "../../../components/Centerblock/Centerblock";
import { fetchFavoriteTraks } from "@/api/userApi";
import { useEffect, useState } from "react";

const FavouritesTracksPage = () => {

    const stateFavTracks: Track[] = useAppSelector((state) => state.player.likedTracks);
    const token = useAppSelector((state) => state.auth.tokens.access);

    const [tracks, setTracks] = useState<Track[]>([]);

    let errorMessage: string | null = null;

    useEffect(() => {
        const fetchFavouritesTracks = async () => {
            if (!token) {
                return;
            }
            try {
                const fetchedTracks = await fetchFavoriteTraks(token);
                setTracks(fetchedTracks);
            } catch (err: unknown) {
                errorMessage =
                err instanceof Error
                    ? "Возникли проблемы при загрузке треков: " + err.message
                    : "Неизвестная ошибка";
            };
        };
        fetchFavouritesTracks();
    }, [token, stateFavTracks]);

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