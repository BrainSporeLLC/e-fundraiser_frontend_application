import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

const Sidebar = () => {
  const [activateSidebar, setActiveSidebar] = useState(false);
  return (
    <>
      <div>
        <GoThreeBars onClick={setActiveSidebar(!activateSidebar)}/>
      </div>
      {activateSidebar ? (
        <div className="menus">
          <NavLink to="raisefunds">raise funds</NavLink>
          <NavLink to="testimonies">testimonies</NavLink>
          <NavLink to="resources">reads</NavLink>
          <NavLink to="login">login</NavLink>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
