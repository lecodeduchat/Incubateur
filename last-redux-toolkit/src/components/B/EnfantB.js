import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EnfantB = () => {
  const enf = useSelector((state) => state.Enf);
  const dispatch = useDispatch();
  return (
    <div className="childB">
      Enfant B
      <section>
        <p>Résultat: {enf.count}</p>
        <p>
          <button
            onClick={() =>
              dispatch({
                type: "Cenf/adder",
                payload: 2,
              })
            }
          >
            Pong
          </button>
        </p>
      </section>
    </div>
  );
};

export default EnfantB;
