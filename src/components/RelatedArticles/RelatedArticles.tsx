import { Link } from "react-router-dom";
import type { ArticlePreview } from "../../types/article";
import styles from "./RelatedArticles.module.css";

type RelatedArticlesProps = {
  articles: ArticlePreview[];
};

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerPill}>
          <h2 className={styles.header}>ЧИТАТЬ ТАКЖЕ:</h2>
        </div>
      </div>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={article.slug} className={styles.listItem}>
            <span className={styles.marker} />
            <Link to={`/article/${article.slug}`} className={styles.link}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
