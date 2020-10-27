import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {

  const APP_ID = 'f6356d7d'
  const API_KEY = '9e3b90ec07e45c687a01f209c6ec110c'

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = res.json()
    console.log(data);

  }


  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button
          type='submit' className='search-button'
        >
        </button>
      </form>

    </div>
  )
}

export default App

