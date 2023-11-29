import { useState, useEffect } from "react";
import styles from "./articles.module.css";
import { NavLink } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setArticles(json));
  }, []);

  const deleteArticle = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => console.log(response))
  }

  return (
    <>
      <h1>Articles</h1>
        {articles.map((article) => (
          <div className={styles.box} key={article.id}>
            <div className={styles.title}>{article.title}</div>
            <NavLink className={styles.articleLink} to={`/articles/${article.id}`}>Go to article detail</NavLink>
            <button onClick={() => deleteArticle(article.id)}> Delete </button>
          </div>
        ))}
    </>
  );
}

export default Articles;
