import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EnfantA = () => {
  const enf = useSelector((state) => state.Enf);
  const par = useSelector((state) => state.Par);
  const dispatch = useDispatch();

  return (
    <div>
      Enfant A
      <section>
        <p>App demande: {par.question}</p>
        <button
          onClick={() =>
            dispatch({
              type: "Cpar/sendReponse",
              payload: "Je vais bien",
            })
          }
        >
          Répondre
        </button>
      </section>
      <section>
        <p>Résultat: {enf.count}</p>
        <p>
          <button
            onClick={() =>
              dispatch({
                type: "Cenf/adder",
                payload: 1,
              })
            }
          >
            Ping
          </button>
        </p>
      </section>
    </div>
  );
};

export default EnfantA;
