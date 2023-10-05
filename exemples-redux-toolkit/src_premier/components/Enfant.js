import React from "react";

const Enfant = ({ data, repondre }) => {
  const send = () => {
    repondre("Tu veux quoi le parent ?");
  };
  return (
    <div className="enfant">
      L'enfant
      <div>J'ai reçu: {data}</div>
      <p>
        <button onClick={send}>Répondre</button>
      </p>
    </div>
  );
};

export default Enfant;
