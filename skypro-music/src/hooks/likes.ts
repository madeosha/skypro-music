import { getFavoriteTraks } from "../store/features/playerSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";

export const useInitializeLikedTraks = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.auth.tokens);

  useEffect(() => {
    if (tokens.access) {
      dispatch(getFavoriteTraks(tokens.access));
    }
  }, [tokens, dispatch]);
};
