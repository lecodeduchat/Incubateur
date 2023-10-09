import React from "react";
import Formulaire from "@partials/Formulaire";
import Header from "@layout/Header";
import Footer from "@layout/Footer";

const Home = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Formulaire />
      <Footer />
    </div>
  );
};

export default Home;
