import styles from "./ArticleHeader.module.css";

import telegram from "../../assets/telegram_link.svg";
import dzen from "../../assets/dzen_link.svg";

type ArticleHeaderProps = {
  tag: string;
  date: string;
  readingTime: string;
  title: string;
};

export const ArticleHeader = ({
  tag,
  date,
  readingTime,
  title,
}: ArticleHeaderProps) => {
  return (
    <header className={styles.header}>
      <p className={styles.tag}># {tag}</p>
      <div className={styles.meta}>
        <div className={styles.info}>
          <time dateTime={date}>{date}</time>
          <span>{readingTime}</span>
        </div>
        <div className={styles.social}>
          <a href="/">
            <img src={telegram} alt="Telegram" className={styles.icon} />
          </a>
          <a href="/">
            <img src={dzen} alt="Дзен" className={styles.icon} />
          </a>
        </div>
      </div>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};
