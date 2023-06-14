import "./App.css";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/contacto" element={<Contact/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/recetas" element={<Recipes/>} />
        <Route  path="/*" element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default App;
