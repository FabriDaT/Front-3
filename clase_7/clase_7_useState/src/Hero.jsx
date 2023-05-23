import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const Hero = (props) => {
  const [list, setList] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const addItem = (item) => {

    if (currentIndex < props.item.length) {
      const newItem = `El artículo ${props.item[currentIndex]} ha sido añadido a la lista.`
      setList([...list, newItem])
      setCurrentIndex(currentIndex + 1)
    }

  };

  return (
    <div className='hero'>
      <button className='buttonHero' onClick={addItem}>Agregar elemento</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};




export default Hero

  const divStyled= styled.div`
    border: 2px black solid;
    display: flex;
    text-align: center;
    background-color: red;
  `

