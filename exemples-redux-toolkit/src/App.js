import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Parent from "@/components/Parent";

function App() {
  const com = useSelector((state) => state.Com);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>APP</h2>
          <button
            onClick={() =>
              dispatch({
                type: "Com/sendQuestion",
                payload: "Salut enfant, comment vas-tu ?",
              })
            }
          >
            Message à l'enfant
          </button>
        </div>
        <p>L'enfant a répondu: {com.reponse}</p>
        <Parent />
      </header>
    </div>
  );
}

export default App;
