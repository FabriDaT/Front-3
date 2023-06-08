import React, { useEffect, useState } from "react";

const Pedido = ({props}) => {

const [showPedido, setShowPedido] = useState(false)  

useEffect( ()=> { 
  setTimeout(() => {setShowPedido(true)},2000) 
  } , [] )

const cancelPedido = () => {
  setShowPedido(false)
  console.log('se desmonto el componente')
  alert('el pedido ha sido cancelado')
}

  return (
    <div>

      <h1> Pedido: </h1>

      {showPedido ? <h3>{props}</h3> : null}

      {console.log('Elcomponente fue actualizado')}

      <button onClick={cancelPedido}> Cancelar pedido</button>

    </div>
  )
}

export default Pedido;
