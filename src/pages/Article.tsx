import { useParams } from "react-router-dom";

import styles from "./Article.module.css";

import { articles, getArticlePreviewsBySlugs } from "../data/articles";

import { BackButton } from "../components/BackButton/BackButton";
import { ArticleHeader } from "../components/ArticleHeader/ArticleHeader";
import { ArticleContent } from "../components/ArticleContent/ArticleContent";
import { RelatedArticles } from "../components/RelatedArticles/RelatedArticles";
import { Lead } from "../components/Lead/Lead";
import NotFound from "./NotFound";

export default function Article() {
  const { slug } = useParams();

  const currentArticle = slug ? articles[slug] : undefined;

  if (!currentArticle) {
    return <NotFound />;
  }

  const relatedArticles = currentArticle.relatedArticles
    ? getArticlePreviewsBySlugs(currentArticle.relatedArticles)
    : [];

  return (
    <>
      <BackButton />

      <article className={styles.article}>
        <ArticleHeader
          tag={currentArticle.tags[0]?.name ?? ""}
          date={currentArticle.date}
          readingTime={currentArticle.readingTime}
          title={currentArticle.title}
        />

        <ArticleContent content={currentArticle.content} />

        {relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}
      </article>

      <Lead
        title={
          <>
            Понравился материал?
            <br />
            Помоги нам стать лучше!
          </>
        }
        tag="p"
        variant="light"
      />
    </>
  );
}
