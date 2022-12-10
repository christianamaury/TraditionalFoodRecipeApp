import Recipe from './Recipe';
import logo from './logo.svg';
//For re-rendering purposes
import React, {useEffect, useState} from "react";
import './App.css';
import {Title} from "./components/Title";
import {Footer} from "./components/Footer";

const App = () => {

  //..App ID Credentials: Authentication
  const APP_ID = '14cc732f';
  const APP_KEY = 'b25704d77c4816cf9c1af36960eff3e1';
  const INITIAL_SEARCH = 'pasta';
  const Example_Req = `https://api.edamam.com/search?q=${INITIAL_SEARCH}&app_id=${APP_ID}&app_key=${APP_KEY}`;

//const [counter, setCounter] = useState(0);
//Setting an empty array of objects
const [recipes, setRecipes] = useState([]);

//For the search state
const [search, setSearch] = useState("");

//Default query option would be Pasta:
const [query, setQuery] = useState("steak");

//For the OnChange Event function
const updateSearch = e => {
setSearch(e.target.value);
console.log(search);

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');

}

//This is a function that takes an arrow function
//The first time our page render
//If I only want this to run once, add a second argument empty set of array
//It will only run whenever I do the second argument. Basically when I submit my search
useEffect(() => {

  getRecipes();

console.log('Effect has been run');

}, [query]);

//Async function calls call for our recipes
const getRecipes = async () => {

  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();

  setRecipes(data.hits);
  console.log(data.hits);
}


return (
  <div className="App">
    <Title title= "ITSYUMMTIME" substitle= "The place for your favorite recipe 🥗🍽🍹"/>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="What would you like to cook or drink today?" value={search} onChange={updateSearch}/>
        <button className="search-button" type="Submit">
         Search
        </button>
      </form>

      <div className="recipes">

      {recipes.map(recipe => (
      <Recipe
      key = {recipe.recipe.label}
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories}
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}
      url = {recipe.recipe.url}
      />
      ))}
      </div>
      <Footer/>
  </div>

);

}



/* Old Class Component
function App() {
  return (
    <div className="App">
    <h1> Hello Boys </h1>

    </div>
  );
}
*/

export default App;
