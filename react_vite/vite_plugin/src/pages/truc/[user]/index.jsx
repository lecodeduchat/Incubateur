import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { user } = useParams();
  return <div>Page user / sous dossier / user : {user}</div>;
};

export default Index;
