import { useParams } from "react-router-dom";
import { articles } from "../mock/articles";

export const ArticlePage = () => {
  const { id } = useParams();

  const article = articles.find(a => a._id === id);

  if (!article) return <div>Not found</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};