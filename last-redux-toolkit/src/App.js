import "./App.css";
import ParentA from "@/components/A/ParentA";
import ParentB from "@/components/B/ParentB";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        APP
        <section>
          <ParentA />
          <ParentB />
        </section>
      </header>
    </div>
  );
}

export default App;
