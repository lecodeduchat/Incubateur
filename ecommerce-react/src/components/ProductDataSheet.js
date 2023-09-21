import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDataSheet = () => {
  const url = "https://127.0.0.1:8000/images/";
  const id = window.location.pathname.split("/")[2];
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  // Envoyer requête à l'API pour récupérer le produit correspondant à l'id
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const inputQuantity = document.querySelector("input[type='text']");

  useEffect(() => {
    axios.get("https://127.0.0.1:8000/api/articles/" + id).then((res) => {
      setData(res.data);
      // Je récupère les images du produit, je les stocke dans un tableau et le leur ajoute l'url pour les afficher
      setImages(res.data.images.split(",").map((image) => url + image));
      setPrice(res.data.price.toFixed(2).replace(".", ","));
    });
  }, []);

  const addBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    basket.push({
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: quantity,
      url: images[0],
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(basket);
    setQuantity(1);
  };
  const addQuantity = () => {
    console.log("click", quantity);
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);
    console.log("plus", quantity);
  };
  const removeQuantity = () => {
    console.log("click");
    if (quantity > 1) {
      let newQuantity = quantity - 1;
      setQuantity(newQuantity);
      console.log("moins", quantity);
    }
  };
  // Afficher les infos du produit
  return (
    <div className="product-sheet-content">
      <div className="img-container">
        <img src={images[0]} alt={data.name} className="img-large" />
        <img src={images[0]} alt={data.name} className="img-small" />
        <img src={images[1]} alt={data.name} className="img-small" />
        <img src={images[2]} alt={data.name} className="img-small" />
      </div>
      <div className="details-product">
        <h1>{data.name}</h1>
        <div className="product-price">€{price}</div>
        <label htmlFor="quantity">Quantité</label>
        <div className="quantity">
          <button onClick={removeQuantity} className="btn-remove-quantity">
            -
          </button>
          <input type="number" id="quantity" name="quantity" value={quantity} />
          <button onClick={addQuantity} className="btn-add-quantity">
            +
          </button>
        </div>
        <div onClick={addBasket} className="button-add-basket">
          AJOUTER AU PANIER
        </div>
      </div>
    </div>
  );
};

export default ProductDataSheet;
