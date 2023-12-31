import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="pheader">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>|&nbsp;
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
