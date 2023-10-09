import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/dashboard";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div className="w-full md:flex overflow-hidden ">
      <Dashboard />
      <Herosection />
    </div>
  );
}

export default App;
