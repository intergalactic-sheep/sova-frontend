import { useState } from "react";

import styles from "./Search.module.css";
import { CardSection } from "../components/CardSection/CardSection";
import { SearchIcon } from "../icons/SearchIcon";
import { searchArticles } from "../data/articles";
import type { ArticlePreview } from "../types/article";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ArticlePreview[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const trimmed = query.trim();
    setResults(trimmed ? searchArticles(trimmed) : []);
    setHasSearched(true);
  };

  const handleChange = (value: string) => {
    setQuery(value);

    // Если поле полностью очищено — сбрасываем результаты до следующего поиска
    if (value.trim() === "") {
      setResults([]);
      setHasSearched(false);
    }
  };

  const renderResults = () => {
    if (!hasSearched) {
      return null;
    }

    const trimmed = query.trim();

    if (!trimmed) {
      return <p className={styles.message}>Введите запрос для поиска</p>;
    }

    if (results.length === 0) {
      return (
        <div className={styles.empty}>
          <p className={styles.emptyMessage}>Ничего не найдено</p>
        </div>
      );
    }

    return <CardSection previews={results} />;
  };

  return (
    <section className={styles.search}>
      <h1 className={styles.title}>Поиск по сайту:</h1>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={query}
          placeholder="Введите запрос"
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          type="button"
          className={styles.button}
          onClick={handleSearch}
          aria-label="Поиск"
        >
          <SearchIcon />
        </button>
      </div>

      <div className={styles.results}>{renderResults()}</div>
    </section>
  );
}