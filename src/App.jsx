import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default App;
