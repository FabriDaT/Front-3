import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import FormDePlayGround from "./Forms/FormDePlayGround";

function App() {
  const items = [
    "lomito",
    "pizza",
    "papas",
    "gaseosa",
    "empanadas",
    "bondiolita",
    "helado",
  ];

  return (
    <div>
      <Hero item={items} />
      <FormDePlayGround/>
      
    
    </div>
  );
}

export default App;
