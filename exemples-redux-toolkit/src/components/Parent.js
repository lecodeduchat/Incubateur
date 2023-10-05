import React from "react";
import Enfant from "./Enfant";

const Parent = () => {
  return (
    <div className="parent">
      <p>Le parent</p>

      <Enfant />
    </div>
  );
};

export default Parent;
