"use server";
const baseUrl = "https://skypro-music-api.skyeng.tech/";

import { revalidateTag } from "next/cache";

export const fetchAddFavoriteTraks = async (
  accessToken: string,
  id: number
) => {
  const response = await fetch(`${baseUrl}catalog/track/${id}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка добавления в избранное");
  }

  revalidateTag("traks");
  const data = await response.json();
  return data;
};

export const fetchDeleteFavoriteTraks = async (
  accessToken: string,
  id: number
) => {
  const response = await fetch(`${baseUrl}catalog/track/${id}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка добавления в избранное");
  }

  revalidateTag("traks");
  const data = await response.json();
  return data;
};