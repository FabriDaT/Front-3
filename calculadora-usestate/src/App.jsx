import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './components/Calculadora'
function App() {
  const [sum, setSum] = useState(0)
  const incrementarSum = (valor) => {
    setSum(sum + valor)
  }

  return (
    <>
      <div>
        <h2>valoar de sum = {sum}</h2>
        <Calculadora amount={1} onEqual={incrementarSum}></Calculadora>
        <Calculadora amount={5} onEqual={incrementarSum}></Calculadora>
        <Calculadora amount={13} onEqual={incrementarSum}></Calculadora>

      </div>
     
    </>
  )
}

export default App
