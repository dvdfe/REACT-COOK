import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/"  className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about"  className={(nav) => (nav.isActive ? "nav-active" : "")}>À propos</NavLink>
        </li>
        <li>
          <NavLink to="/my-recipes"  className={(nav) => (nav.isActive ? "nav-active" : "")}>Mes recettes</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
