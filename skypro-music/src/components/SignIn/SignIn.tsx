"use client";
import Image from "next/image";
import styles from "./SignIn.module.css";
import Link from "next/link";
import classNames from "classnames";
import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { getTokens, getAuthUser } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await Promise.all([
        dispatch(getTokens(formData)).unwrap(),
        dispatch(getAuthUser(formData)).unwrap(),
      ]);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
            <button className={styles.modal__btn_signup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
