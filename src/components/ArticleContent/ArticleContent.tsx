import styles from "./ArticleContent.module.css";

import type { ArticleContentArgs } from "../../types/article";

type Props = {
  content: ArticleContentArgs[];
};

export const ArticleContent = ({ content }: Props) => {
  return (
    <section className={styles.content}>
      {content.map((block) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2 key={block.id} className={styles.heading}>
                {block.text}
              </h2>
            ) : (
              <h3 key={block.id} className={styles.heading}>
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p key={block.id} className={styles.paragraph}>
                {block.text}
              </p>
            );

          case "image":
            return (
              <img
                key={block.id}
                className={styles.image}
                src={block.src}
                alt={block.alt}
              />
            );

          case "banner":
            return (
              <a
                key={block.id}
                className={styles.banner}
                href={block.href}
              >
                <img src={block.src} alt={block.alt} />
              </a>
            );

          default:
            return null;
        }
      })}
    </section>
  );
};
