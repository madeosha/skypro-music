"use client";
import Link from "next/link";
import styles from "./SignUp.module.css";
import Image from "next/image";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getTokens, getRegUser, getAuthUser } from "@/store/features/authSlice";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

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
      await Promise.all([dispatch(getRegUser(formData)).unwrap()]);
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login}>
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
              className={styles.modal__input}
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Имя пользователя"
            />
            <input
              className={styles.modal__input}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Почта"
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
            />
            <button
              className={styles.modal__btn_signup_ent}
              onClick={handleSubmit}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
