import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')

    const apiKey = 'c82213b093654f10a0ac80ba334e58a2'
    const url = `https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${search}&number=10`; 
    // 
    useEffect(() => {
        axios(url)
        .then(res => setRecipes(res.data.searchResults[0].results))
    }, [url])
    console.log(recipes)
  return (
    <div>
        <input type="text" onBlur={(e) => setSearch(e.target.value)}/>
        {recipes.map((recipe) => (
            <Link to={'/detalle/' + recipe.id} key={recipe.id}>
                <li>{recipe.name}</li>
            </Link>
        ))}
    </div>
  )
}

export default Recipes