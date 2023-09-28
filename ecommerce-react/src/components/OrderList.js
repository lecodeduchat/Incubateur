import React from "react";
import OrderRow from "@/components/OrderRow";

const OrderList = ({ articles }) => {
  const rows = [];
  let subtotal = 0;
  let total = 0;
  let shipping = 6;
  let taxes = 0;

  articles.forEach((item) => {
    subtotal = subtotal + item.price * item.quantity;
  });
  total = subtotal + shipping;
  taxes = subtotal * 0.2;
  for (let article of articles) {
    rows.push(<OrderRow article={article} key={article.id} />);
  }

  return (
    <div className="order-content">
      <h1>Commande</h1>
      <ul className="order-list">{rows}</ul>
      <div className="order-subtotal">
        <span>Sous-total</span>
        <span>{subtotal.toFixed(2).replace(".", ",")} €</span>
      </div>
      <div className="order-shipping">
        <span>Livraison</span>
        <span>6,00 €</span>
      </div>
      <div className="order-total">
        <span>Total</span>
        <span style={{ color: "#ccc", fontWeight: "normal" }}>EUR</span>
        <span>{total.toFixed(2).replace(".", ",")} €</span>
      </div>
      <div className="order-taxes">
        <span>Taxes de {taxes.toFixed(2).replace(".", ",")}€ incluses</span>
      </div>
    </div>
  );
};

export default OrderList;
