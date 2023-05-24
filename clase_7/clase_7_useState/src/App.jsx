import { useState } from "react";
import "./App.css";
import Hero from "./Hero";

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

  // creamos estados para cada uno de los inputs del formulario
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // creamos manejadores de eventos para cada uno de los inputs del formulario
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  // creamos un manejador para el evento onSubmit
  const onSubmitForm = (e) => {
    // evitamos que se cargue la pagina previniendo el comportamiento por defecto
    e.preventDefault();
    // por ahora solo mostramos el nombre de usuario
    alert(`Bienvenido: ${userName}`);
  };

  //***********---------------¡¡¡¡ VALIDACIONES !!!------------- *************/
  // Creamos una funcion para validar el nombre de usuario
  const validateUserName = (userName) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = userName.trim();
    // Validamos la extension
    if (withoutSpaces.length > 2) {
      return true;
    } else {
      return false;
    }
  };

  // Creamos una funcion para validar el password
  const validatePassword = (password) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = password.trim();
    // Separamos el string en un array para luego
    // recorrelo y validar si existe al menos un numero
    const passwordAsArray = withoutSpaces.split("");
    // Some nos retorna true si al menos una de las
    // iteraciones es verdadera
    const hasNumber = passwordAsArray.some((character) => {
      // Si el valor es NaN, no es un numero
      if (isNaN(character)) {
        return false;
      } else {
        return true;
      }
    });
    // Validamos la extension y que haya al menos un numero
    if (withoutSpaces.length > 5 && hasNumber) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Hero item={items} />

      <h3>Iniciar Sesión</h3>

      {/* Pasamos nuestro manejador al evento onSubmit */}
      <form onSubmit={onSubmitForm}>
        {/** Creamos dos inputs controlados pasando el estado como value y el
        manejador al evento onChange */}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        {/** Mediante el type nos aseguramos que se dispare el evento onSubmit al
        hacer click en el botón */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
