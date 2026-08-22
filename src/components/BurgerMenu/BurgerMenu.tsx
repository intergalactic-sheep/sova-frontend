import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./BurgerMenu.module.css";
import { menuItems } from "./menuItems";

import closed_cross from "../../assets/closed_cross.svg";
import telegramLink from "../../assets/telegram_link.svg";
import dzenLink from "../../assets/dzen_link.svg";

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const isActive = (item: (typeof menuItems)[0]): boolean => {
    if (item.type === 'page') {
      return location.pathname === item.path;
    }
    if (item.type === 'tag') {
      return location.pathname === `/tag/${item.tagSlug}`;
    }
    return false;
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть меню"
        >
          <img src={closed_cross} alt="" />
        </button>
        <nav>
          <ul className={styles.list}>
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.type === 'external' ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.type === 'page' ? item.path : `/tag/${item.tagSlug}`}
                    className={`${styles.link} ${
                      isActive(item) ? styles.active : ""
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.socials}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className={styles.logo} src={dzenLink} alt="Дзен" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className={styles.logo} src={telegramLink} alt="Telegram" />
          </a>
        </div>
      </aside>
    </>
  );
};
