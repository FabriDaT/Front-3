
import './App.css'
import FuncComponent from './Components/FuncComponent'
import React from 'react'

const App = () => {

  return (  // react renderiza 2 componentes diferentes, asi podemos reutilizar el mimsmo con diferentes contenidos

    <>
     <FuncComponent text={'Nº 1'} otraProp={'otra loca props'} Hola={'Juan'}/>

    <FuncComponent text={' Nº 2'} otraProp={'otra loca prop diferente al de arriba'} Hola={`Roberto`} />
    </>
   

  )
}

export default App