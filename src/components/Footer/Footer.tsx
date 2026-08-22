import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/logo.svg';
import telegram_link from '../../assets/telegram_link.svg';
import dzen_link from '../../assets/dzen_link.svg';

type MenuItem = 
  | { type: 'page'; label: string; path: string }
  | { type: 'tag'; label: string; tagSlug: string }
  | { type: 'external'; label: string; url: string };

const menuItems: MenuItem[] = [
  { type: 'page', label: 'Главная', path: '/' },
  { type: 'tag', label: 'Новости', tagSlug: 'news' },
  { type: 'tag', label: 'Феминизм', tagSlug: 'feminism' },
  { type: 'tag', label: 'История', tagSlug: 'history' },
  { type: 'tag', label: 'Социальное', tagSlug: 'social' },
  { type: 'tag', label: 'Культура', tagSlug: 'culture' },
  { type: 'tag', label: 'Книги', tagSlug: 'books' },
  { type: 'tag', label: 'ФемТех', tagSlug: 'fem-tech' },
  { type: 'external', label: 'Поддержать', url: 'https://dzen.ru/id/67102d4fc6ec2e283cd4d477?donate=true' },
  { type: 'tag', label: 'Контакты', tagSlug: 'contacts' },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Навигация в белом блоке */}
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {menuItems.map((item) => {
            if (item.type === 'external') {
              return (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {item.label}
                  </a>
                </li>
              );
            }
            if (item.type === 'page') {
              return (
                <li key={item.label}>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <Link to={`/tag/${item.tagSlug}`} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={styles.socialList}>
          <li>
            <a
              href="#"
              className={styles.link}
              aria-label="Telegram"
            >
              <img src={telegram_link} alt="Telegram" className={styles.linkLogo} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={styles.link}
              aria-label="Дзен"
            >
              <img src={dzen_link} alt="Дзен" className={styles.linkLogo} />
            </a>
          </li>
        </ul>
      </nav>

      {/* Логотип */}
      <img className={styles.logo} src={logo} alt="Логотип издания SOVA" />

      {/* Выходные данные */}
      <small className={styles.copyright}>
        Сетевое издание "SOVA".
        <br />
        Интернет-журнал о феминизме и женской культуре. © 2026.
      </small>
    </footer>
  );
};
