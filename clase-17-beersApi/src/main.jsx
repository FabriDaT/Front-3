import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(


  //esto es lo primero que debemos hacer envoover la <app> en Browser router para tener ruteada toda la app ! //
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
