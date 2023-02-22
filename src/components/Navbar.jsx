import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav>
      <div className="navLogo">
        <NavLink to="/">e-fundraiser</NavLink>
      </div>
      <Sidebar
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
