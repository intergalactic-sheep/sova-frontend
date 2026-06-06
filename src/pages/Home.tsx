import { articles } from "../mock/articles";

export const Home = () => {
  return (
    <div>
      <h1>Статьи</h1>

      {articles.map(article => (
        <div key={article._id}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
};