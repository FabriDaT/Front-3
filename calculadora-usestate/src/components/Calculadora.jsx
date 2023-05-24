import React, { useState } from 'react'

const Calculadora = ({amount, onEqual}) => {
    
    const [valor, setValor] = useState(0)
    const sumar = () => {
        setValor(valor + amount)
    }
    const restar = () => {
        setValor(valor - amount)
    }
    const reset = () => {
        setValor(0)
    }
    const mostrarValor = () => {
        console.log("El valor actual es:",  valor)
        onEqual(valor)
    }


  return (
    <div>
        <h3>valor inicial = {valor}</h3>

        <button onClick={sumar}>+</button>

        <button onClick={restar}>-</button>

        <button onClick={reset}>reset</button>

        <button onClick={mostrarValor}>=</button>


    </div>
  )
}

export default Calculadora
