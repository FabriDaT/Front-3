import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

 
 const App = () => {
   return (
      <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/:beer' element={<Beer/>} />
            <Route/>
      </Routes>
   </div>
   )
 }
 
 export default App