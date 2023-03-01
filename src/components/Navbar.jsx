import React from "react";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import Button from "./Button";
const Navbar = ({visible, show }) => {
  return (
    <nav>
      <div className="navLogo">
        <NavLink to="/">e-fundraiser</NavLink>
      </div>
      <div className="mobile-sidebar">
        <Button
        onClick={ () => show(!visible)}
        >
          <GoThreeBars size={40}/>
        </Button>
      </div>
      <div 
      className={ visible? "show-menu menus": "menus" }
      >
        <NavLink to="programs">programs</NavLink>
        <NavLink to="about_us">who are we?</NavLink>
        <NavLink to="donate">donate</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
