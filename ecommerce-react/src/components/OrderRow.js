import React from "react";

const OrderRow = ({ article }) => {
  let total = article.price * article.quantity;

  return (
    <li className="OrderRow">
      <img src={article.url} alt={article.name} className="img-small" />
      <span className="article-quantity">{article.quantity}</span>
      <span className="article-name">{article.name}</span>
      <span className="article-total">
        {total.toFixed(2).replace(".", ",")} €
      </span>
    </li>
  );
};

export default OrderRow;
