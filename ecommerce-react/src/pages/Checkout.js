import React, { useState } from "react";
import OrderList from "@/components/OrderList";
import axios from "axios";

const Checkout = () => {
  const order = JSON.parse(localStorage.getItem("basket"));
  const [userData, setUserData] = useState({});

  // Je récupère l'email du client en décodant le token
  const token = localStorage.getItem("token");
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const user = JSON.parse(window.atob(base64));
  const email = user.username;

  // Je récupère les données personnelles du client
  axios.get("https://localhost:8000/user/" + email).then((res) => {
    setUserData(res.data);
  });

  const sendOrder = () => {
    console.log("Commande envoyée à", userData.email);
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
