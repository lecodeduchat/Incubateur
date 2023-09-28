import React from "react";
import { NavLink } from "react-router-dom";

const NavSecondary = () => {
  return (
    <div className="nav-secondary">
      <NavLink to="/connexion">
        <i className="fa fa-user"></i>
      </NavLink>
      <NavLink to="/panier">
        <i className="fa fa-shopping-cart"></i>
      </NavLink>
    </div>
  );
};

export default NavSecondary;
