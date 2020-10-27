import React, { useEffect, useState } from 'react'
import Recipe from "./Recipe";

import "./App.css"


const App = () => {

  const APP_ID = 'f6356d7d'
  const API_KEY = '9e3b90ec07e45c687a01f209c6ec110c'


  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = res.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => setSearch(e.target.value)

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }


  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input value={search} onChange={updateSearch} className='search-bar' type='text' />
        <button
          type='submit' className='search-button'
        >Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingre={recipe.recipe.ingredients}        
        key={recipe.recipe.label} />
      ))}
      </div>

    </div>
  )
}

export default App

