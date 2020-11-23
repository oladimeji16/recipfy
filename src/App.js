import React, { useEffect, useState } from 'react'
import Recipe from "./Recipe";

import "./App.css"
import Axios from 'axios';


const App = () => {

  const APP_ID = 'f6356d7d'
  const API_KEY = '9e3b90ec07e45c687a01f209c6ec110c'


  const [recipes, setRecipes] = useState()
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    const getRecipes = async () => {
      Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
      .then(res => setRecipes(res.data.hits))
      .catch(err => console.log(err))      
    }
    getRecipes()
  }, [query])



  const updateSearch = e => { setSearch(e.target.value) }

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

        {
          recipes ? recipes.map((recipe) => (
            <Recipe
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}            
            ingres={recipe.recipe.ingredients}
            key={recipe.recipe.label}
             />
          )): 'Loading...'
        }
      </div>

    </div>
  )
}

export default App

