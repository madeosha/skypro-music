import { fetchAddFavoriteTraks } from "@/api/userApi";
import { Track } from "@/components/Main/Main.types";
import { useAppSelector } from "@/store/store";

export const useLikeTrack = (track: Track) => {
    const tokens = useAppSelector((state) => state.auth.tokens);
    const likedTracks = useAppSelector((state) => state.player.likedTracks);
    // Логика проверки наличия трека в списке лайкнутых
    const isLiked = likedTracks.find((el) => el === track);

    const handleLike = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        // Логика работы с лайками треков (ставить и удалять)
        if (tokens.access) {
            isLiked ? fetchAddFavoriteTraks(tokens.access, track.id) : false;
        }
    };
    return { isLiked, handleLike };
  };