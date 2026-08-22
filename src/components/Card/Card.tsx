import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import type { ArticlePreview } from "../../types/article";

type CardProps = {
  preview: ArticlePreview;
};

export const Card = ({ preview }: CardProps) => {
  const primaryTag = preview.tags[0];
  
  if (!primaryTag) {
    return null;
  }

  return (
    <article className={styles.card}>
      <div className={styles.tagContainer}>
        <span className={styles.tag}># {primaryTag.name}</span>
        <Link to={`/tag/${primaryTag.slug}`} className={styles.link}>
          все по теме:
        </Link>
      </div>
      <Link to={`/article/${preview.slug}`} className={styles.cardLink}>
        <h2 className={styles.title}>{preview.title}</h2>
        <p className={styles.lead}>{preview.lead}</p>
        <img src={preview.image} alt={preview.title} className={styles.image} />
      </Link>
    </article>
  );
};
