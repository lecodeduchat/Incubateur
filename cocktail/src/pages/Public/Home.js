import React, { useState, useEffect, useRef } from "react";
import { articleService } from "@/_services";
import Card from "@/components/public/Card";
import "./layout.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const flag = useRef(false);

  // POur éviter l'erreur "Cannot read properties of undefined (reading map)"
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (flag.current === false) {
      articleService
        .getAllArticles()
        .then((res) => {
          console.log(res.data["hydra:member"]);
          setArticles(res.data["hydra:member"]);
          setIsLoad(true);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  if (!isLoad) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="home">
      {articles.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
};

export default Home;
