import { Track } from "@/components/Main/Main.types";
import { setDislikeTrack, setLikeTrack } from "@/store/features/playerSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchAddFavoriteTraks, fetchDeleteFavoriteTraks, fetchFavoriteTraks } from "@/api/userApi";

export const useLikeTrack = (track: Track) => {
    const dispatch = useAppDispatch();
    const tokens = useAppSelector((state) => state.auth.tokens);
    const likedTracks = useAppSelector((state) => state.player.likedTracks);
    // Логика проверки наличия трека в списке лайкнутых
    const isLiked = likedTracks.some((el) => el.id === track.id);

    const handleLike = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();

        // Логика работы с лайками треков (ставить и удалять)
        if (tokens.access) {
            if (isLiked) {
                await fetchDeleteFavoriteTraks(tokens.access, track.id);
                dispatch(setDislikeTrack(track));
            }
            else {
                await fetchAddFavoriteTraks(tokens.access, track.id);
                dispatch(setLikeTrack(track));
            }
        }
    };
    return { isLiked, handleLike };
  }; 