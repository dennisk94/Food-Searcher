import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/apiKey';
import RecipeCard from '../components/RecipeCard';

const PageSingleCategory = () => {

  const [ categoryRecipesData, setCategoryRecipesData ] = useState(null);

  const { slug } = useParams();

  useEffect( () => {

    if ( slug === 'popular' ) {
      // Get popular recipes
      const fetchPopularRecipes = async () => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=12&apiKey=${ API_KEY }`);
        let rawRecipeData = await res.json();
        rawRecipeData = rawRecipeData.results;
        setCategoryRecipesData(rawRecipeData);
      };

    fetchPopularRecipes();
    } else if ( slug === 'italian' ) {
     // Get cuisine recipes
      const fetchCuisineRecipes = async () => {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&cuisine=Italian&number=12&apiKey=${ API_KEY }`);
      let rawRecipeData = await res.json();
      rawRecipeData = rawRecipeData.results;
      setCategoryRecipesData(rawRecipeData);
      };

      fetchCuisineRecipes();
    } else if ( slug === 'dessert' ) {
      // Get dessert recipes
      const fetchDessertRecipes = async () => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?type=dessert&sort=popularity&number=12&apiKey=${ API_KEY }`);
        let rawRecipeData = await res.json();
        rawRecipeData = rawRecipeData.results;
        setCategoryRecipesData(rawRecipeData);
      };

      fetchDessertRecipes();
    } else if ( slug === 'vegan' ) {
      // Get vegan recipes
        const fetchVeganRecipes = async () => {
          const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=vegan&sort=popularity&number=12&apiKey=${ API_KEY }`);
          let rawRecipeData = await res.json();
          rawRecipeData = rawRecipeData.results;
          setCategoryRecipesData(rawRecipeData);
        };

        fetchVeganRecipes();
    }
  }, [slug]);

  const categoryHeadingGenerator = () => {
    switch( slug ) {
      case 'popular': 
        return <h1>Popular</h1>;
      case 'italian':
        return <h1>Italian</h1>;
      case 'dessert':
        return <h1>Dessert</h1>;
      case 'vegan':
        return <h1>Vegan</h1>;
      default:
        return <h1>Category</h1>;
    }
  }

    return (
      <div className="single-category">
        {
          categoryHeadingGenerator()
        }
          <div className="single-category__cards-grid">
            {
              categoryRecipesData && categoryRecipesData.map( ( recipe ) => 
                <RecipeCard key={ recipe.id } id={ recipe.id } title={recipe.title} type={ recipe.imageType }/>
              )
            }
          </div>
      </div>
    )
  }
  
  export default PageSingleCategory;