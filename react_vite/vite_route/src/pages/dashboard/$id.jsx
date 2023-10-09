import React from "react";
import { useParams } from "react-router-dom";

const $id = () => {
  const { id } = useParams();
  return <div>ID dynamics from dashboard ~ {id}</div>;
};

export default $id;
