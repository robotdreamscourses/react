import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ArticleDetail() {
  let { id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setArticle(json));
  }, [id]);

  console.log(article);
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  )
}

export default ArticleDetail;
