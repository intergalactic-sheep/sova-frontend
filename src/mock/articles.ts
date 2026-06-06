import type { Article } from "../types/article";

export const articles: Article[] = [
  {
    _id: "1",
    title: "Первая статья",
    content: "<p>Текст статьи</p>",
    author: "Софа",
    createdAt: "2026-03-28",
    tags: ["феминизм"]
  },
  {
    _id: "2",
    title: "Женщины в истории",
    content: "<p>История...</p>",
    author: "Софа",
    createdAt: "2026-03-27",
    tags: ["история"]
  }
];