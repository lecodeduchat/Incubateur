import React from "react";
import ArticleRow from "./ArticleRow";

const ArticleTable = ({ articles }) => {
  const rows = [];
  let total = 0;

  articles.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  for (let article of articles) {
    rows.push(<ArticleRow article={article} key={article.id} />);
  }

  return (
    <table className="article-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <tfoot>
        <tr>
          <td colSpan="4">Sous-total</td>
          <td>€{total}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ArticleTable;
