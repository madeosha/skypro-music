import { Centerblock } from "../Centerblock/Centerblock";
import { Menu } from "../Menu/Menu";
import { Player } from "../Player/Player";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Main.module.css";

export const Main = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <main className={styles.main}>
                <Menu />
                <Centerblock />
                <Sidebar />
            </main>
            <Player />
            <footer className={styles.footer}></footer>
        </div>
      </div>
    )
}