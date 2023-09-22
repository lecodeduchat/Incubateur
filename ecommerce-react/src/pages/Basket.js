import React, { useState } from "react";
import Header from "../components/Header";
import ArticleTable from "../components/ArticleTable";

const Basket = () => {
  const basket = JSON.parse(localStorage.getItem("basket"));

  const clearBasket = () => {
    localStorage.setItem("basket", JSON.stringify([]));
  };
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  return (
    <div>
      <Header />
      <h1>Votre panier</h1>
      {/* <table className="table-basket">
        <thead>
          <tr>
            <th></th>
            <th></th>
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
              <td className="price">€{item.price}</td>
              <td className="quantity">
                <span className="removeQuantity">-</span>
                {item.quantity}
                <span className="addQuantity">+</span>
              </td>
              <td className="totalLine">€{item.price * item.quantity}</td>
            </tr>
           
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total</td>
            <td>€{total}</td>
          </tr>
        </tfoot>
      </table> */}
      <div className="basket-container">
        <ArticleTable articles={basket} />
        <div className="actions">
          <div className="btn-clear-basket btn-action" onClick={clearBasket}>
            Vider le panier
          </div>
          <div className="btn-continue-shopping btn-action">
            Continuer vos achats
          </div>
        </div>

        <p className="infos">
          Taxes incluses. Frais de port calculés à la caisse.
        </p>
        <form>
          {/* onCheck est une fonction call-back permettant de faire remonter les informations */}
          <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
          <button disabled={!isTermAccepted} className="btn-validate-basket">
            PASSER AU PAIEMENT
          </button>
        </form>
      </div>
    </div>
  );
};

function CGUCheckbox({ checked, onCheck }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => onCheck(e.target.checked)}
          checked={checked}
        />
        &nbsp;Veuillez cocher cette case pour accepter nos termes et conditions.
      </label>
    </div>
  );
}

export default Basket;
