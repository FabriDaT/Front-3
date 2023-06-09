import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosFetch = () => {

  const url = "https://jsonplaceholder.typicode.com/comments"

  const [list, setList] = useState([])

  useEffect(() => {
    axios(url)
    .then( (resp) => setList(resp.data))
    return () => {
      // aqui va lo que pasa cuando se desmonta el componente
      console.log ('Se desmonto el componente Axios')
    }
  }, [])
  
  return (
    <div className="contenedorLista">
      AxiosFetch
      
       {list.map((info) => (
            <ul key={info.id}> Nombre usuario : {info.name}
                <li> email :  {info. email} </li>
                <li> comentario : {info.body} </li>
            </ul>
  ))} 
      
      
    </div>
  );
};

export default AxiosFetch;
