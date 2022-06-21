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
import SearchResultsByIngredients from '../components/SearchResultsByIngredients';

const PageHome = () => {

  const [ randomRecipes, setRandomRecipes ] = useState(null);
  const [ popularRecipeData, setPopularRecipeData ] = useState(null);
  const [ cuisineRecipeData, setCuisineRecipeData ] = useState(null);
  const [ dessertRecipeData, setDessertRecipeData ] = useState(null);
  const [ veganRecipeData, setVeganRecipeData ] = useState(null);
  const [ searchRecipeData, setSearchRecipeData ] = useState(null);
  const [ searchTerm, setSearchTerm ] = useState(null);
  const [ recipeByIngredients, setRecipeByIngredientsData ] = useState(null);
  const [ filterTerms, setFilterTerm ] = useState( [] );

  useEffect( () => {

    // Get random recipes
    const fetchRandomRecipes = async () => {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${ API_KEY }`);
      let rawRecipeData = await res.json();
      rawRecipeData = rawRecipeData.recipes;
      console.log(rawRecipeData);
      setRandomRecipes(rawRecipeData);
    };

    fetchRandomRecipes();

    // Get popular recipes
  //   const fetchPopularRecipes = async () => {
  //     const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=${ API_KEY }`);
  //     let rawRecipeData = await res.json();
  //     rawRecipeData = rawRecipeData.results.splice(0, 3);
  //     setPopularRecipeData(rawRecipeData);
  //     // console.log(rawRecipeData);
  //   };

  //   fetchPopularRecipes();

  //  // Get cuisine recipes
  //   const fetchCuisineRecipes = async () => {
  //   const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&cuisine=Italian&apiKey=${ API_KEY }`);
  //   let rawRecipeData = await res.json();
  //   rawRecipeData = rawRecipeData.results.splice(0, 3);
  //   setCuisineRecipeData(rawRecipeData);
  //   // console.log(rawRecipeData);
  // };

  // fetchCuisineRecipes();

  // // Get dessert recipes
  // const fetchBeverageRecipes = async () => {
  //   const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?type=dessert&sort=popularity&apiKey=${ API_KEY }`);
  //   let rawRecipeData = await res.json();
  //   rawRecipeData = rawRecipeData.results.splice(0, 3);
  //   setDessertRecipeData(rawRecipeData);
  //   // console.log(rawRecipeData);
  // };

  // fetchBeverageRecipes();

  // // Get vegan recipes
  // const fetchVeganRecipes = async () => {
  //   const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=vegan&sort=popularity&apiKey=${ API_KEY }`);
  //   let rawRecipeData = await res.json();
  //   rawRecipeData = rawRecipeData.results.splice(0, 3);
  //   setVeganRecipeData(rawRecipeData);
  //   // console.log(rawRecipeData);
  // };

  // fetchVeganRecipes();

   // Get searched recipes
    if ( searchTerm ) {
      const fetchSearchedRecipes = async () => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${ searchTerm }&sort=popularity&apiKey=${ API_KEY }`);
        let rawRecipeData = await res.json();
        rawRecipeData = rawRecipeData.results.splice(0, 3);
        setSearchRecipeData(rawRecipeData);
        // console.log(rawRecipeData);
      };
    
      fetchSearchedRecipes();
    }

    // Get searched recipes based on ingredients
    // if ( filterTerms ) {
    //   console.log(filterTerms);
    //   const fetchRecipesByIngredients = async () => {
    //     const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ filterTerms[0] },${ filterTerms.slice(1).map( ( term ) => `+${term},`) }&apiKey=${ API_KEY }`);
    //     let rawRecipeData = await res.json();
    //     rawRecipeData = rawRecipeData.splice(0, 3);
    //     console.log(rawRecipeData);
    //     setRecipeByIngredientsData(rawRecipeData);
    //   };
    
    //   fetchRecipesByIngredients();
    // }

  }, [searchTerm, filterTerms]);

  // if ( !popularRecipeData   ||
  //      !cuisineRecipeData   ||
  //      !dessertRecipeData   ||
  //      !veganRecipeData     
  //   ){
  //   return;
  // }

  return (
    <div className="page-home">
      <Banner randomRecipes={ randomRecipes }/>
      <Popular popularRecipes={ popularRecipeData }/>
      <Search setSearchTerm={ setSearchTerm }/>
      <SearchResults searchRecipes={ searchRecipeData }/>
      <Cuisine cuisineRecipes={ cuisineRecipeData }/>
      <Dessert dessertRecipes={ dessertRecipeData }/>
      <Nutrients veganRecipes={ veganRecipeData }/>
      <SearchByIngredients setFilterTerm={ setFilterTerm } filterTerms={ filterTerms }/>
      <SearchResultsByIngredients recipeByIngredients={ recipeByIngredients }/>
    </div>
  )
}

export default PageHome;