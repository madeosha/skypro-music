"use client";
import { playlistApi } from "@/api/playlistApi";
import Centerblock from "@/components/Centerblock/Centerblock";
import { setTracks } from "@/store/features/playerSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useMemo, useState } from "react";
import styles from "../../layout.module.css";
import { Search } from "@/components/Search/Search";

type CategoryProps = {
  params: {
    id: string;
  };
};

const Category = ({ params }: CategoryProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filterTracks = useAppSelector((state) => state.player.filterPlaylist);
  const memoizedFilterTracks = useMemo(() => filterTracks, [filterTracks]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    playlistApi(params.id)
      .then((response) => {
        dispatch(setTracks(response.items));
        setIsLoading(true);
      })
      .catch((error) => {
        setError("Ошибка загрузки треков");
      });
  }, []);

  return (
    <>
      <div className={styles.main__centerblock}>
        <Search />
        <h2 className={styles.centerblock__h2}>Треки</h2>
        <Centerblock
          allTracks={memoizedFilterTracks}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default Category;
