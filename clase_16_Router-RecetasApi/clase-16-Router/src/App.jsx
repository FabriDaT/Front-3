import "./App.css";
import Navbar from "./Components/Navbar";
import Recipes from "./Pages/Recipes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import { routes } from "./utils/routes";
import Detail from "./Pages/Detail";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.recipes} element={<Recipes />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.pageNotFound} element={<PageNotFound />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
