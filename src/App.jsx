import { useState } from "react";
import NavBar from "./Layout/Sheard/NavBar";
import Footer from "./Layout/Sheard/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
