import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/public/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* Outlet indique au Router d'afficher les routes enfants */}
      <Outlet />
    </div>
  );
};

export default Layout;
