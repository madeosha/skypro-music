"use client";
import Image from "next/image";
import styles from "./SignIn.module.css";
import Link from "next/link";
import classNames from "classnames";
import React, { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { setTokens, setUser } from "@/store/features/authSlice";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (!result || result.error) {
      setError("Неверный логин или пароль");
    } else {
      // Ждем, пока токены будут добавлены в куки
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Обновляем сессию
      const updatedSession = await getSessionFromServer();

      // Проверяем токены и обновляем стора
      if (updatedSession) {
        const accessToken = updatedSession.accessToken;
        const user = updatedSession.user;
        const name = user?.name;
        const email = user?.email;

        if (accessToken && name && email) {
          dispatch(setTokens({ accessToken }));
          dispatch(setUser({ name, email }));
          router.push("/");
        } else {
          setError("Не удалось получить токены");
        }
      }
    }
  };
  const getSessionFromServer = async () => {
    const res = await fetch("/api/auth/session");
    if (res.ok) {
      return await res.json();
    }
    return null;
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action="#">
            <Link href="/">
              <div className={styles.modal__logo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            <input
              className={classNames(styles.modal__input, styles.login)}
              placeholder="Почта"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
            />
            <button className={styles.modal__btn_enter} onClick={handleSubmit}>
              Войти
            </button>
            {error && <div className={styles.error}>{error}</div>}
            <button className={styles.modal__btn_signup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
