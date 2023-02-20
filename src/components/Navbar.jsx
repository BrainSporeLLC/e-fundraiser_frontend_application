import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="screen__halfs">
      <div className="navLogo">
        <NavLink to="/">e-fundraiser</NavLink>
      </div>
      <div className="menus">
        <NavLink to="raisefunds">raise funds</NavLink>
        <NavLink to="testimonies">testimonies</NavLink>
        <NavLink to="resources">reads</NavLink>
        <NavLink to="login">login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
