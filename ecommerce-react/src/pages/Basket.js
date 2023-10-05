import React, { useState } from "react";
import Header from "../components/Header";
import ArticleTable from "../components/ArticleTable";
import { accountService } from "../_services/account.service";

const Basket = () => {
  const basket = JSON.parse(localStorage.getItem("basket"));

  const clearBasket = () => {
    localStorage.setItem("basket", JSON.stringify([]));
  };
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  const goToCheckout = (e) => {
    e.preventDefault();
    // Je vérifie si l'utilisateur est connecté
    if (accountService.isLogged()) {
      console.log("utilisateur connecté");
      // Si oui, je le redirige vers la page de paiement
      window.location.href = "/caisse";
    } else {
      // Si non, je le redirige vers la page de connexion
      window.location.href = "/connexion";
    }
  };

  return (
    <div>
      <Header />
      <h1>Votre panier</h1>
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
          <button
            disabled={!isTermAccepted}
            className="btn-validate-basket"
            onClick={(e) => goToCheckout(e)}
          >
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
