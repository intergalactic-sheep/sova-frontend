import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { BurgerIcon } from "../../icons/BurgerIcon";
import { SearchIcon } from "../../icons/SearchIcon";

import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  const HEADER_HEIGHT = 178;
  const HEADER_BOTTOM_MARGIN = 72;
  const SCROLL_THRESHOLD = HEADER_HEIGHT + HEADER_BOTTOM_MARGIN;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > SCROLL_THRESHOLD) {
        setIsHidden(true);
      } else if (currentY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isHidden ? styles.headerHidden : ""}`}
      >
        <img src={logo} className={styles.logo} alt="Логотип журнала SOVA" />
        <nav className={styles.navigation}>
          <button
            aria-label="Открыть меню"
            className={`${styles.navButton} ${styles.burgerButton}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <BurgerIcon />
          </button>
          <button
            aria-label="Поиск"
            className={`${styles.navButton} ${styles.searchButton}`}
            onClick={() => navigate("/search")}
          >
            <SearchIcon />
          </button>
        </nav>
      </header>
      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};