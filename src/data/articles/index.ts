import { news1 } from './news-1';
import { news2 } from './news-2';
import { news3 } from './news-3';
import type { ArticlePreview } from '../../types/article';

export const articles = {
  [news1.slug]: news1,
  [news2.slug]: news2,
  [news3.slug]: news3,
};

export const articlePreviews: ArticlePreview[] = Object.values(articles).map(
  ({ slug, tags, title, lead, previewImage }) => ({
    slug,
    tags,
    title,
    lead,
    image: previewImage,
  }),
);

export function getPreviewsByTag(tagSlug: string): ArticlePreview[] {
  return articlePreviews.filter(preview =>
    preview.tags.some(tag => tag.slug === tagSlug)
  );
}

export function getArticlePreviewsBySlugs(slugs: string[]): ArticlePreview[] {
  return slugs
    .map((slug) => articlePreviews.find((article) => article.slug === slug))
    .filter((article): article is ArticlePreview => Boolean(article));
}
