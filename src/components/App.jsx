import React from "react";
import Signup from "./Signup";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Signup />
      <Outlet />
    </>
  );
}

export default App;
