import React, { useState } from "react";
import Enfant from "./Enfant";

const Parent = () => {
  let message = "Bonjour";
  const [answer, setAnswer] = useState("rien");

  return (
    <div className="parent">
      <p>Le parent</p>
      <div>J'ai envoyé: {message}</div>
      <div>Il m'a répondu: {answer}</div>

      <Enfant data={message} repondre={setAnswer} />
    </div>
  );
};

export default Parent;
