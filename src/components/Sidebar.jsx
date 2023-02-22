import React, { useState } from 'react';
import { GoThreeBars} from "react-icons/go";

const Sidebar = () => {
    const [activateSidebar, setActiveSidebar] = useState(false);
    const toggleSidebar = setActiveSidebar(!activateSidebar);
  return (
    <>
        <div><GoThreeBars/></div>
    </>
  )
}

export default Sidebar