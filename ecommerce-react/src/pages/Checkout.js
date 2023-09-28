import React from "react";
import OrderList from "@/components/OrderList";
import axios from "axios";

const Checkout = () => {
  const order = JSON.parse(localStorage.getItem("basket"));

  // Je récupère l'id du client
  axios.get("https://localhost:8000/api/user").then((res) => {
    console.log(res.data);
  });

  const sendOrder = () => {
    console.log("Commande envoyée");
    // création d'une commande
  };
  return (
    <div className="Checkout">
      <header></header>
      <div className="checkout-content">
        <div className="infos-container">
          <div className="delivery">
            <h1>Livraison</h1>
          </div>
          <div className="payment">
            <h1>Paiement</h1>
            <button onClick={sendOrder}>PAYER</button>
          </div>
        </div>
        <div className="order-container">
          <OrderList articles={order} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
