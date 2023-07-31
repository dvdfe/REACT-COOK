import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/random-recipe">Choisis pour moi</NavLink>
        </li>
        <li>
          <NavLink to="/my-recipes">Mes recettes</NavLink>
        </li>
        <li>
          <NavLink to="/about">À propos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
