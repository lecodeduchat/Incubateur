import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Product from "@/pages/Product";
import Contact from "@/pages/Contact";
import Basket from "@/pages/Basket";
import Login from "@/pages/Login";
import AuthGuard from "@/_helpers/AuthGuard";
import Checkout from "@/pages/Checkout";
import Geolocalisation from "@/pages/Geolocalisation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produit/:slug" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/panier" element={<Basket />} />
        <Route path="/geolocalisation" element={<Geolocalisation />} />	
        <Route
          path="/caisse"
          element={
            <AuthGuard>
              <Checkout />
            </AuthGuard>
          }
        />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
