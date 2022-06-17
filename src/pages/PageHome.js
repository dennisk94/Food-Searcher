import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/apiKey';
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Cuisine from '../components/Cuisine';
import Category from "../components/Category";
import Nutrients from "../components/Nutrients";
import SearchByIngredients from "../components/SearchByIngredients";
import SearchResults from "../components/SearchResults";

const PageHome = () => {

  const [ recipeData, setRecipeData ] = useState(null);

  useEffect( () => {
    // Get popular recipes
    const fetchPopularRecipes = async () => {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=${ API_KEY }`);
      let rawRecipeData = await res.json();
      // rawRecipeData = rawRecipeData.results.splice(0, 1);
      setRecipeData(rawRecipeData.results);
      console.log(rawRecipeData.results);
    };

    fetchPopularRecipes();
  }, []);

  return (
    <div className="page-home">
      <Banner />
      <Popular />
      <Search />
      <SearchResults />
      <Cuisine />
      <Category />
      <Nutrients />
      <SearchByIngredients />
      <SearchResults />
    </div>
  )
}

export default PageHome;