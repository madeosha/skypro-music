import Filter from "../../../components/Filter/Filter"
import styles from "../layout.module.css";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Search } from "../../../components/Search/Search";
import { Track } from "../../../components/Main/Main.types";
import Centerblock from "../../../components/Centerblock/Centerblock";
import { fetchFavoriteTraks } from "@/api/userApi";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../configs/auth";

const FavouritesTracksPage = async () => {

    const session = await getServerSession(authOptions); // Получаем сессию на серверной стороне

    const token = session?.accessToken;

    let tracks: Track[] = [];
    let errorMessage: string | null = null;

            try {
                if (token) {
                    tracks = await fetchFavoriteTraks(token);
                }
            } catch (err: unknown) {
                errorMessage =
                err instanceof Error
                    ? "Возникли проблемы при загрузке треков: " + err.message
                    : "Неизвестная ошибка";
            };

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