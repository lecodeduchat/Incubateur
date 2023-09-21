import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Favoris from "../components/Favoris";

const Home = () => {
  if (!localStorage.getItem("basket")) {
    const basket = [];
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  const banner1 = [
    "Organisez-vous selon vos propres besoins",
    "Stimulez votre créativité et exprimez-vous",
    "Atteignez vos objectifs de vie en douceur",
  ];
  const banner2 = [
    "Papier recyclé ou issu de forêts gérées durablement certifiées FSC®",
    "Emballages à 70% d'origine recyclée minimum et 100% recyclables",
    "Blisters biodégradables à base de maïs et de pomme de terre",
  ];
  return (
    <div>
      <Header />
      <Slider />
      <Banner banner={banner1} />
      <Favoris />
      <Banner banner={banner2} />
    </div>
  );
};

export default Home;
