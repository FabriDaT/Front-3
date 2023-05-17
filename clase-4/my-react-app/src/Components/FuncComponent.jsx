
import React from 'react'

function FuncComponent(props) {  // o puedo desestructurar la porps en 'text' y 'otraProp', 'Hola'
  return (
    <div style={{border:'red 3px solid', margin:' 5px'}}>FuncComponent
        <h1>Este es un componente de funcion {props.text}</h1>
            <p>trabajando con props</p>
            <ul>
                <li>Hola.. {props.Hola}</li>
                <li>Como vai ?</li>
                <li> {props.otraProp}</li>
            </ul>
    </div>
  )
}

export default FuncComponent