import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavbar = () => {
  return (
    <nav className="menu-nav">
      <div className="menu-logo">Goose</div>
      <ul className="menu-pages">
        <li>
          <NavLink to="/menu">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu-two">Menu two</NavLink>
        </li>
        <li>New Blog</li>
      </ul>
    </nav>
  );
};

export default MenuNavbar;
