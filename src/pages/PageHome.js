import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/apiKey';
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Cuisine from '../components/Cuisine';
import Dessert from '../components/Dessert';
import Nutrients from "../components/Nutrients";
import SearchByIngredients from "../components/SearchByIngredients";
import SearchResults from "../components/SearchResults";

const PageHome = () => {

  const [ popularRecipeData, setPopularRecipeData ] = useState(null);
  const [ cuisineRecipeData, setCuisineRecipeData ] = useState(null);
  const [ dessertRecipeData, setDessertRecipeData ] = useState(null);
  const [ veganRecipeData, setVeganRecipeData ] = useState(null);

  useEffect( () => {
    // Get popular recipes
    const fetchPopularRecipes = async () => {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=${ API_KEY }`);
      let rawRecipeData = await res.json();
      rawRecipeData = rawRecipeData.results.splice(0, 3);
      setPopularRecipeData(rawRecipeData);
      // console.log(rawRecipeData);
    };

    fetchPopularRecipes();

   // Get cuisine recipes
    const fetchCuisineRecipes = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&cuisine=Italian&apiKey=${ API_KEY }`);
    let rawRecipeData = await res.json();
    rawRecipeData = rawRecipeData.results.splice(0, 3);
    setCuisineRecipeData(rawRecipeData);
    // console.log(rawRecipeData);
  };

  fetchCuisineRecipes();

  // Get cuisine recipes
  const fetchBeverageRecipes = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?type=dessert&sort=popularity&apiKey=${ API_KEY }`);
    let rawRecipeData = await res.json();
    rawRecipeData = rawRecipeData.results.splice(0, 3);
    setDessertRecipeData(rawRecipeData);
    // console.log(rawRecipeData);
  };

  fetchBeverageRecipes();

  // Get cuisine recipes
  const fetchVeganRecipes = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&sort=popularity&apiKey=${ API_KEY }`);
    let rawRecipeData = await res.json();
    rawRecipeData = rawRecipeData.results.splice(0, 3);
    setVeganRecipeData(rawRecipeData);
    // console.log(rawRecipeData);
  };

  fetchVeganRecipes();

  }, []);

  if ( !popularRecipeData   ||
       !cuisineRecipeData   ||
       !dessertRecipeData  ||
       !veganRecipeData
    ){
    return;
  }

  return (
    <div className="page-home">
      <Banner />
      <Popular popularRecipes={ popularRecipeData }/>
      <Search />
      <SearchResults />
      <Cuisine cuisineRecipes={ cuisineRecipeData }/>
      <Dessert dessertRecipes={ dessertRecipeData }/>
      <Nutrients veganRecipes={ veganRecipeData }/>
      <SearchByIngredients />
      <SearchResults />
    </div>
  )
}

export default PageHome;