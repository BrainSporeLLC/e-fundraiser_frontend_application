import React from "react";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
const Navbar = ({visible, show }) => {
  return (
    <nav>
      <div className="navLogo">
        <NavLink to="/">e-fundraiser</NavLink>
      </div>
      <div className="mobile-sidebar">
        <button>
          <GoThreeBars size={40}/>
        </button>
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
