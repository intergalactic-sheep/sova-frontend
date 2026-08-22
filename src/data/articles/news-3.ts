import article_image4 from "../../assets/article_image4.png"

import type { ArticleArgs } from "../../types/article";
import { tags } from "../tags";

export const news3: ArticleArgs = {
  slug: "news-3",
  tags: [tags.social],
  title: "Абьюзивные отношения в подростковом возрасте",
  date: "11/5/2026",
  readingTime: "4 минуты чтения",
  lead: "Абьюзивные отношения это не только физическое насилие, но и постоянные оскорбления, запугивание, угрозы, завладевание телефоном и шантаж.",
  previewImage: article_image4,
  content: [
    {
      id: 1,
      type: "paragraph",
      text: "Абьюзивные отношения это не только физическое насилие, но и постоянные оскорбления, запугивание, угрозы, завладевание телефоном и шантаж. Здоровые отношения строятся на уважении и доверии, а не на страхе.",
    },
    {
      id: 2,
      type: "image",
      src: article_image4,
      alt: "Стало известно, сколько денег могут потерять женщины в декрете ~ 15 млн рублей",
    },
  ],
  relatedArticles: ["news-1", "news-2"],
};
