import React, { useState } from "react";
import Header from "../components/Header";
import LineBasket from "../components/LineBasket";

const Basket = () => {
  const basket = JSON.parse(localStorage.getItem("basket"));
  let total = 0;
  basket.forEach((item) => {
    total = total + item.price * item.quantity;
  });
  const clearBasket = () => {
    localStorage.setItem("basket", JSON.stringify([]));
  };
  return (
    <div>
      <Header />
      <h1>Votre panier</h1>
      <table className="table-basket">
        <thead>
          <tr>
            <th>Image</th>
            <th>nom de l'article</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => (
            <tr className="line-basket" key={item.id}>
              <td>
                <img src={item.url} alt={item.name} className="img-small" />
              </td>
              <td>{item.name}</td>
              <td>€{item.price}</td>
              <td>{item.quantity}</td>
              <td>€{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total</td>
            <td>€{total}</td>
          </tr>
        </tfoot>
      </table>
      <div className="btn-clear-basket" onClick={clearBasket}>
        Vider le panier
      </div>
    </div>
  );
};

export default Basket;
