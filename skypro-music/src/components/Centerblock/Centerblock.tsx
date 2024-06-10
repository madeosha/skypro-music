import { Filter } from "../Filter/Filter";
import { Search } from "../Search/Search";
import styles from "./Centerblock.module.css";
import classNames from 'classnames';

export const Centerblock = () => {
    return (
    <div className={styles.main_centerblock}>
            <Search />
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <Filter />
            <div className={styles.centerblock__content}>
              <div className={styles.content__title}>
                <div className={classNames(styles.playlist_title__col, styles.col01)}>Трек</div>
                <div className={classNames(styles.playlist_title__col, styles.col02)}>Исполнитель</div>
                <div className={classNames(styles.playlist_title__col, styles.col03)}>Альбом</div>
                <div className={classNames(styles.playlist_title__col, styles.col04)}>
                  <svg className={styles.playlist_title__svg}>
                    <use href="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className={styles.content__playlist}>
                
                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Guilt 
                            <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Nero</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Welcome Reality</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>4:44</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Elektro 
                            <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Dynoro, Outwork, Mr. Gee</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Elektro</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__title_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>2:22</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">I’m Fire 
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Ali Bakgor</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">I’m Fire</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>2:22</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Non Stop
                          <span className={styles.track__title_span}>(Remix)</span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Стоункат, Psychopath</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Non Stop</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>4:12</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Run Run
                          <span className={styles.track__title_span}>(feat. AR/CO)</span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Jaded, Will Clarke, AR/CO</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Run Run</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>2:54</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Eyes on Fire
                          <span className={styles.track__title_span}>(Zeds Dead Remix)</span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Blue Foundation, Zeds Dead</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Eyes on Fire</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>5:20</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Mucho Bien
                          <span className={styles.track__title_span}>(Hi Profile Remix)</span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Mucho Bien</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>3:41</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Knives n Cherries
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Knives n Cherries
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Knives n Cherries
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Knives n Cherries
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Knives n Cherries
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Knives n Cherries
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Knives n Cherries
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">minthaze</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Captivating</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">How Deep Is Your Love
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Calvin Harris, Disciples</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">How Deep Is Your Love</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>3:32</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">Morena
                          <span className={styles.track__title_span}></span>
                        </a>
                      </div>
                   </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://">Tom Boxer</a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://">Soundz Made in Romania</a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}>3:36</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg}>
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__title_text}>
                        <a className={styles.track__title_link} href="http://">
                          <span className={styles.track__title_span}></span>
                        </a>                                                                                                                                                                                                                                                                                                                          
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__author_link} href="http://"></a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__album_link} href="http://"></a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__time_svg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__time_text}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
);
}

