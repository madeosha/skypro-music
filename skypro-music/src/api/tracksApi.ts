export const getTracks = async () => {
    const response = await fetch(
        "https://skypro-music-api.skyeng.tech/catalog/track/all/",
        { 
            method: "GET",
            cache: "no-cache",
        }
    );
    if (!response.ok) {
      throw new Error("Не удалось загрузить список треков");
    }
    const data = await response.json();
    return data;
}