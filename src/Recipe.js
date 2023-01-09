import React from "react";
import style from './recipe.module.css';

//Recipe Component
const Recipe = ({title,calories,image, ingredients, url}) => {
return (
  <div className={style.recipe}>
        <h1> {title} </h1>
          <h4> Ingredients 🍽 </h4>
        <ul>
          {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
          ))}
        </ul>
        <p>{' Total Calories:' + Math.round(calories)} </p>
        <a href={url}> see the entire step by step </a>
        <img className={style.image} src={image} alt=""/>
  </div>
);
}

export default Recipe;
