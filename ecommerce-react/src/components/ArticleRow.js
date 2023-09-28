import React from "react";

const ArticleRow = ({ article }) => {
  let total = article.price * article.quantity;

  const removeArticle = () => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    const index = basket.findIndex((item) => item.id === article.id);
    if (basket[index].quantity > 1) {
      basket[index].quantity--;
    } else {
      basket.splice(index, 1);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.reload();
  };

  const addArticle = () => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    const index = basket.findIndex((item) => item.id === article.id);
    basket[index].quantity++;
    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.reload();
  };

  const deleteArticle = () => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    const index = basket.findIndex((item) => item.id === article.id);
    basket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.reload();
  };

  return (
    <tr className="article-row">
      <td>
        <img src={article.url} alt={article.name} className="img-small" />
      </td>
      <td className="article-name">
        <span>{article.name}</span>
        <span className="article-delete" onClick={deleteArticle}>
          Retirer
        </span>
      </td>
      <td className="price">€{article.price}</td>
      <td className="quantity">
        <span className="removeQuantity" onClick={removeArticle}>
          -
        </span>
        {article.quantity}
        <span className="addQuantity" onClick={addArticle}>
          +
        </span>
      </td>
      {/* <td className="total">€{article.price * article.quantity}</td> */}
      <td className="total">€{total}</td>
    </tr>
  );
};

export default ArticleRow;
