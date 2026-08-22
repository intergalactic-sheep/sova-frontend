import article_image3 from "../../assets/article_image3.png"

import type { ArticleArgs } from "../../types/article";
import { tags } from "../tags";

export const news2: ArticleArgs = {
  slug: "news-2",
  tags: [tags.feminism],
  title: "Маленькая, тихая, скромная: телесный контроль патриархата над женщинами",
  date: "11/5/2026",
  readingTime: "4 минуты чтения",
  lead: "Исторически образ «правильного» женского тела был далёк от современного культивационного идеала худобы.",
  previewImage: article_image3,
  content: [
    {
      id: 1,
      type: "paragraph",
      text: "Исторически образ «правильного» женского тела был далёк от современного культивационного идеала худобы. Античные статуи богинь, в том числе Афродиты, показывают мягкие животы, полные бёдра, плотные тела: символы плодородия, силы и сексуальности, а не истощения.",
    },
    {
      id: 2,
      type: "image",
      src: article_image3,
      alt: "Стало известно, сколько денег могут потерять женщины в декрете ~ 15 млн рублей",
    },
  ],
  relatedArticles: ["news-1"],
};
