import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Enfant = () => {
  const com = useSelector((state) => state.Com);
  const dispatch = useDispatch();

  return (
    <div className="enfant">
      L'enfant
      <div>J'ai reçu: {com.question}</div>
      <p>
        <button
          onClick={() =>
            dispatch({
              type: "Com/sendReponse",
              payload: "Je vais bien App, merci.",
            })
          }
        >
          Répondre
        </button>
      </p>
    </div>
  );
};

export default Enfant;
