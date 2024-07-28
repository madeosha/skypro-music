"use client";
import Image from "next/image";
import styles from "./Menu.module.css";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "../../store/store";

export const Menu = () => {
  // Cоздаем состояние для меню
  const [menu, setMenu] = React.useState<boolean>(false);
  const user = useAppSelector((state) => state.auth.user);
    return (
        <nav className={styles.main__nav}>
              <div className={styles.nav__logo}>
                <Image 
                  src="/img/logo.png" 
                  className={styles.logo__image} 
                  width={113.5} 
                  height={17} 
                  alt="Логотип"
                />
              </div>
              <div
                onClick={() => {
                  setMenu((prev) => !prev);
                }}
                className={styles.nav__burger}>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
              </div>
              {menu ? (
                <div className={styles.nav__menu}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__link}>Главное</a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__link}>Мой плейлист</a>
                  </li>
                  <li className={styles.menu__item}>
                    {!user && <Link className={styles.menu__link} href={"/signin"}>Войти</Link>}
                  </li>
                </ul>
              </div>
              ) : null}
            </nav>
    );
};