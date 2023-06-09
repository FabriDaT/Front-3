import React, { useEffect, useState } from "react";


/* ACLARACION IMPORTANTE : 
  CADA VEZ QUE SE HACE UN FETCH A UNA API Y ESTE QUEDA FUERA DEL "USE-EFECT" SE VA A REALIZAR UN BUCLE
  INFINITO DE RENDERIZADO DEL COMPONENTE. POR QUE ?.. PORQUE CADA VEZ QUE SE ACTUALIZA UN ESTADO(HOOK USE-STATE)
  REACT VUELVE A RENDERIZAR EL COMPONENTE AUTOMATICAMENTE,EN ESTE CASO HACEMOS EL SETLIST DENTRO DEL FETCH
  POR LO QUE EN CADA PETICION SE ACTUALIZA EL ESTADO Y EL COMPONENTE RENDERIZA, ENTONCES LA SOLUCION ES
  COLOCAR LA LLAMADA A LA API DENTRO DEL USE-EFFECT Y EN LA DEPENDENCIA LA DEJAMOS VACIA: [], ASI
  SOLO SE RENDERIZA UNA VEZ */

const FetchAPI = () => {
  console.log('Primero se renderiza esto fetchApi')
  const url = "https://jsonplaceholder.typicode.com/comments"

  const [list , setList] = useState([])

  const fetchApiComents = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data) )
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    console.log('Se monto el componente fetchApi')
    fetchApiComents()
    return () => console.log('Se desmonto el componente FetchApi')
  }, [])

  return (
    <div className="contenedorLista">
      FetchAPI - Comentarios random
     {list.map( (info) => (
       
       <ul key={info.id}>
          Nombre : {info.name}
        <li> Email : {info.email}</li>
        <li> Comentario : {info.body}</li>
       </ul>
      ) ) 
    }
      
    </div>
  )
}

export default FetchAPI
