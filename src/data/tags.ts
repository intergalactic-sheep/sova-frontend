import type { Tag } from '../types/article';

export const tags: Record<string, Tag> = {
  news: { slug: 'news', name: 'Новости' },
  feminism: { slug: 'feminism', name: 'Феминизм' },
  social: { slug: 'social', name: 'Социальное' },
  culture: { slug: 'culture', name: 'Культура' },
};

export const tagList: Tag[] = Object.values(tags);

export function getTagBySlug(slug: string): Tag | undefined {
  return tags[slug];
}
