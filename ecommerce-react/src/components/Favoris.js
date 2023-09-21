import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Favoris = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://127.0.0.1:8000/api/articles")
      .then((res) => res.data["hydra:member"])
      .then((res) => setData(res));
  }, []);

  return (
    <div className="favoris">
      <h2>NOS FAVORIS</h2>
      <div className="cards-container">
        <ul>
          {data.map((article, index) => (
            <Card article={article} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favoris;
