import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produit/:slug" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connection" element={<Connexion />} />
        <Route path="/panier" element={<Basket />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
