import { useState } from "react";

import styles from "./CardSection.module.css";
import { Card } from "../Card/Card";
import { articlePreviews } from "../../data/articles";
import type { ArticlePreview } from "../../types/article";

type CardSectionProps = {
  previews?: ArticlePreview[];
};

const INITIAL_COUNT = 8;
const LOAD_COUNT = 10;

export const CardSection = ({ previews }: CardSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const data = previews ?? articlePreviews;
  const visibleCards = data.slice(0, visibleCount);

  return (
    <section className={styles.cardSection}>
      <div className={styles.cards}>
        {visibleCards.map((preview) => (
          <Card key={preview.slug} preview={preview} />
        ))}
      </div>

      {visibleCount < data.length && (
        <button
          className={styles.button}
          onClick={() => setVisibleCount(visibleCount + LOAD_COUNT)}
        >
          Показать еще
        </button>
      )}
    </section>
  );
};
