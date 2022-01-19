//import React from "react"; 3.5K
//I can also delete the thing below;
//Importing Recipe Component
import Recipe from './Recipe';
import logo from './logo.svg';
//For re-rendering purposes
import React, {useEffect, useState} from "react";
import './App.css';



const App = () => {

  //..App ID Credentials: Authentication
  const APP_ID = '14cc732f';
  const APP_KEY = 'b25704d77c4816cf9c1af36960eff3e1';
  const Example_Req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

//const [counter, setCounter] = useState(0);


//Setting an empty array of objects
const [recipes, setRecipes] = useState([]);

//For the search state
const [search, setSearch] = useState("");

//Default query option would be chicken:
const [query, setQuery] = useState("chicken");

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


return(
  <div className="App">
      <h1> Hello React! </h1>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>

        <button className="search-button" type="Submit">
         Search
        </button>
      </form>

      {recipes.map(recipe => (
      <Recipe
      key = {recipe.recipe.label}
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories}
      image = {recipe.recipe.image}
    
      />
      ))}

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
