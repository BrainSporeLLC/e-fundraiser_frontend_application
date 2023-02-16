import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default App;
