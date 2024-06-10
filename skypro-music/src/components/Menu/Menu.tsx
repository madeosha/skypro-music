import Image from "next/image"
import styles from "./Menu.module.css"

export const Menu = () => {
    return (
        <nav className={styles.main__nav}>
              <div className={styles.nav__logo}>
                <Image src="img/logo.png" className={styles.logo__image} width={113.33} height={17} alt="Логотип"/>
              </div>
              <div className={styles.nav__burger}>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
              </div>
              <div className={styles.nav__menu}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__link}>Главное</a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__link}>Мой плейлист</a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="../signin.html" className={styles.menu__link}>Войти</a>
                  </li>
                </ul>
              </div>
            </nav>
    )
}