const urlPlaylist = "https://skypro-music-api.skyeng.tech/catalog/selection/";

export const playlistApi = async (id: string) => {
    const response = await fetch(urlPlaylist + id,
        {
            method: "GET",
            cache: "no-cache",
        }
    );
    if (!response.ok) {
        throw new Error("Ошибка в получении плейлистов");
    }
    const data = await response.json();
    return data.items;
}