import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const url = "https://127.0.0.1:8000/images/";

  return (
    <Link to={`/service/${article.id}`} className="card_link">
      <article className="card_article">
        <img
          src={url + article.images.split(",")[0]}
          alt={article.name}
          className="img-small"
        />
        <div>{article.name}</div>
      </article>
    </Link>
  );
};

export default Card;
