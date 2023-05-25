import React from "react";
import { useState } from "react";

/* 
Requisitos:
Crear un formulario de registro de usuario, con los campos:
Nombre completo.
Edad.
Pokemon favorito.
Y luego el campo Registro, con una funcionalidad que vimos en clase.
*/

const FormClase8 = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pokemonFavorito, setPokemonFavorito] = useState("");
  // varibles con funciones que manejan los estados del input del form
  const onChangeNombre = (e) => setNombre(e.target.value)
  const onChangeEdad = (e) => setEdad(e.target.value)
  const onChangePokemonFavorito = (e) => setPokemonFavorito(e.target.value)

  return (
    <div>
      Form-clase8
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={onChangeNombre}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={onChangeEdad}
        />
        <input
          type="text"
          placeholder="Pokemon favorito"
          value={pokemonFavorito}
          onChange={onChangePokemonFavorito}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Form - clase8;
