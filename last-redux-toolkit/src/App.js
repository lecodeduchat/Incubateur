import "./App.css";
import ParentA from "@/components/A/ParentA";
import ParentB from "@/components/B/ParentB";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const par = useSelector((state) => state.Par);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        APP
        <section>
          <p>
            <button
              onClick={() =>
                dispatch({
                  type: "Cpar/sendQuestion",
                  payload: "Comment tu vas?",
                })
              }
            >
              Dire bonjour
            </button>
          </p>
          <p>
            L'enfant répond: <span>{par.reponse}</span>
          </p>
        </section>
        <section>
          <ParentA />
          <ParentB />
        </section>
      </header>
    </div>
  );
}

export default App;
