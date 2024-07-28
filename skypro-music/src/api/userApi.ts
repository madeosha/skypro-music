import { SignInFormType, SignUpFormType } from "../types/types";

const baseUrl = "https://skypro-music-api.skyeng.tech/";

export const fetchAddUser = async ({email, password, username}: SignUpFormType) => {
    const response = await fetch(`${baseUrl}user/signup/`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            username,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.status === 500) {
        throw new Error("Сервер сломался, попробуйте позже");
    } else if (!response.ok) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

export const fetchUser = async ({email, password}: SignInFormType) => {
    const response = await fetch(`${baseUrl}user/login/`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.status === 400) {
        throw new Error("Неверный логин или пароль");
    } else if (!response.ok) {
        throw new Error("Заполни все обязательные поля");
    }

    const data = await response.json();
    return data;
}

export const fetchTokens = async ({email, password}: SignInFormType) => {
    const response = await fetch(`${baseUrl}user/token/`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.status === 400) {
        throw new Error("Неверный логин или пароль для получение токена");
    } else if (!response.ok) {
        throw new Error("Невозможно получить токен");
    }

    const data = await response.json();
    return data;
}

export const fetchFavoriteTraks = async (accessToken : string) => {
    const response = await fetch(`${baseUrl}catalog/track/favorite/all/`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.status === 401) {
        throw new Error("Токен протух");
    } else if (!response.ok) {
        throw new Error("Ошибка получения токена");
    }

    const data = await response.json();
    return data;
}