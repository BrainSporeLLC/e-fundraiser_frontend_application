import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [sidabarNavVisible, setSidebarNavVisible] = useState(false);
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default App;
