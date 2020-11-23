import React from 'react'
import style from './Recipe.module.css'

const Recipe = ({ title, calories, image, ingres }) => {
    return (
        <div className={style.recipe}>
            <h1>Name: {title}</h1>
            <img className={style.image} src={image} alt="" />
            <p>Calories present: {calories}</p>
            <ol>
                <h2>INGREDIENTS:</h2>
                {ingres.map(ingre => 
                <li>{ingre.text}</li>
                )}
            </ol>
                       
        </div>
    )
}

export default Recipe
