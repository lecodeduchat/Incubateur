import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>Container principal</div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
