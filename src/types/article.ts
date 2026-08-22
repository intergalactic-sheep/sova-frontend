export type ArticleContentArgs =
  | {
      id: number;
      type: "paragraph";
      text: string;
    }
  | {
      id: number;
      type: "heading";
      level: 2 | 3;
      text: string;
    }
  | {
      id: number;
      type: "image";
      src: string;
      alt: string;
    }
  | {
      id: number;
      type: "banner";
      src: string;
      href: string;
      alt: string;
    };

export type Tag = {
  slug: string;
  name: string;
};

export type ArticleArgs = {
  slug: string;
  tags: Tag[];
  title: string;
  date: string;
  readingTime: string;
  lead: string;
  previewImage: string;
  content: ArticleContentArgs[];
  relatedArticles?: string[];
};

export type ArticlePreview = {
  slug: string;
  tags: Tag[];
  title: string;
  lead: string;
  image: string;
};
