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
    </>
  );
};

export default Sidebar;
