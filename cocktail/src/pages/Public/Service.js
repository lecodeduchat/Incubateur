import React, { useEffect, useState } from "react";
import { articleService } from "@/_services";
import { useParams } from "react-router-dom";
import "./layout.css";

const Service = () => {
  const [article, setArticle] = useState([]);
  const [images, setImages] = useState([]);
  let { aid } = useParams();
  const url = "https://127.0.0.1:8000/images/";

  useEffect(() => {
    articleService
      .getArticle(aid)
      .then((res) => {
        console.log(res.data.images.split(",")[0]);
        setArticle(res.data);
        setImages(res.data.images.split(",").map((image) => url + image));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="service">
      <img src={images[0]} alt={article.name} className="img-big" />
      <div>{article.name}</div>
    </div>
  );
};

export default Service;
