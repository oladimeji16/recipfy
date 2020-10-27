import React from 'react'
import style from './Recipe.module.css'

const Recipe = ({ title, calories, image, ingres }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingres.map(ingre => 
                <li>{ingre.text}</li>
                )}
            </ol>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe
