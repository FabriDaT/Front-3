import { useState } from "react";
import "./App.css";
import AxiosFetch from "./AxiosFetch";
import FetchAPI from "./fetchAPI";

function App() {
  const [showAxios, setShowAxios] = useState(false);

  const handleClick = () => {
    setShowAxios(true);
  };

  return (
    <>
      <h2>Clase 14 - useEfect - fetchAPI - Axios</h2>
      <button onClick={handleClick}> Cambiar a AXIOS</button>
      {showAxios && <AxiosFetch></AxiosFetch>}

      <FetchAPI></FetchAPI>
    </>
  );
}

export default App;
