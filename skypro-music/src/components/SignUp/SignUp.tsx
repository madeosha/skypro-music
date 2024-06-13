import Link from "next/link";
import styles from "./SignUp.module.css";
import Image from "next/image";

export const SignUp = () => {
    return (
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login}>
            <Link href="/">
              <div className={styles.modal__logo}>
                <Image src="/img/logo_modal.png" alt="logo" width={140} height={21} />
              </div>
            </Link>
            <input
              className={styles.modal__input}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modal__btn_signup_ent}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}