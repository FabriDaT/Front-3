import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/beer:id" element={<Beer />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
