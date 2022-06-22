import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/apiKey';
import RecipeCard from '../components/RecipeCard';

const PageSingleRecipe = () => {

    const [ singleRecipe, setSingleRecipe ] = useState(null);
    const [ recipeInstructions, setRecipeInstructions ] = useState( null );
    const [ similarRecipes, setSimilarRecipes ] = useState(null);

    const { id } = useParams();

    useEffect( () => {
        // Get single recipe info
        const fetchSingleRecipe = async () => {
            const res = await fetch(`https://api.spoonacular.com/recipes/${ id }/information?apiKey=${ API_KEY }&includeNutrition=true`);
            let rawRecipeData = await res.json();
            setSingleRecipe(rawRecipeData);
        };

        fetchSingleRecipe();
        
        // Get recipe instructions
        const fetchRecipeInstructions = async () => {
            const res = await fetch(`https://api.spoonacular.com/recipes/${ id }/analyzedInstructions?apiKey=${ API_KEY }`);
            let rawRecipeData = await res.json();
            if ( rawRecipeData.length === 0 ) {
                setRecipeInstructions(null);
            } else {
                setRecipeInstructions(rawRecipeData[0].steps);
            }
        };

        fetchRecipeInstructions();

        // Get similar recipes
        const fetchSimilarRecipes = async () => {
            const res = await fetch(`https://api.spoonacular.com/recipes/${ id }/similar?apiKey=${ API_KEY }`);
            let rawRecipeData = await res.json();
            rawRecipeData = rawRecipeData.splice(0, 3);
            setSimilarRecipes(rawRecipeData);
        };

        fetchSimilarRecipes();
    }, [ id ]);

    if ( !singleRecipe ) {
        return;
    }

    const { title, 
            imageType, 
            servings,
            readyInMinutes,
            sourceName,
        } = singleRecipe;

    // Code to display ingredients
    const displayIngredients = () => {
        return (
            singleRecipe.extendedIngredients.map( ( ingredient, i ) => {
                return (
                    <div className='single-recipe__ingredient'>
                        <li key={i}>{ ingredient.original }</li>
                        <img src={ `https://spoonacular.com/cdn/ingredients_100x100/${ ingredient.image }` } alt={ ingredient.name } />
                    </div>
                )
            })
        )
    };

    // // Code to display instructions
    const displayInstructions = () => {
        return (
            recipeInstructions ? recipeInstructions.map( ( instruction, i ) => <li key={i}>{ instruction.step }</li>)
            :
            <></>
        )
    };

    // // Code to display nutrition
    const displayNutrition = () => {
        return (
            singleRecipe.nutrition.nutrients.map( ( nutrient ) => {
                switch ( nutrient.name ) {
                    case 'Calories':
                        return (
                            <div className="single-recipe__nutrition-detail">
                                <p>
                                    Cal: { Math.floor(nutrient.amount) } { nutrient.unit }
                                </p>
                            </div>
                        );
                    case 'Protein':
                        return (
                            <div className="single-recipe__nutrition-detail">
                                <p>
                                Protein: { Math.floor(nutrient.amount) } { nutrient.unit }
                                </p>
                            </div>
                        );
                    case 'Fat':
                        return (
                            <div className="single-recipe__nutrition-detail">
                                <p>
                                Fat: { Math.floor(nutrient.amount) } { nutrient.unit }
                                </p>
                            </div>
                        );
                    case 'Carbohydrates':
                        return (
                            <div className="single-recipe__nutrition-detail">
                                <p>
                                    Carbs: { Math.floor(nutrient.amount) } { nutrient.unit }
                                </p>
                            </div>
                        );
                    case 'Fiber':
                        return (
                            <div className="single-recipe__nutrition-detail">
                                <p>
                                    Fiber: { Math.floor(nutrient.amount) } { nutrient.unit }
                                </p>
                            </div>
                        );
                    default:
                }
            } )
        )
    }

    const displaySimilarRecipes = () => {
        if ( similarRecipes ) {
            return(
                similarRecipes.map( ( recipe ) => <RecipeCard   key={ recipe.id }
                                                                id={ recipe.id } 
                                                                title={recipe.title} 
                                                                type={ recipe.imageType }
                />)
            )
        }
    };

  return (
    <div className='single-recipe'>
        <div className="single-recipe__banner">
            <div className="single-recipe__overview">
                <h1>
                    { title }
                </h1>
                <div className="single-recipe__info">
                    <h3>
                        Servings: { servings }
                    </h3>

                    <h3>
                        Ready In: { readyInMinutes } Min
                    </h3>

                    <h3>
                        Recipe By: { sourceName ? sourceName : 'N/A' }
                    </h3>
                </div>
            </div>

            <img src={ `https://spoonacular.com/recipeImages/${ id }-636x393.${ imageType }` } alt={ title } className='single-recipe__img'/>
        </div>

        <div className="single-recipe__details">
            <div className="single-recipe__ingredients">
                <h3>
                    Ingredients
                </h3>
                <hr />

                <ul className='single-recipe__list'>
                    {
                        displayIngredients()
                    }
                </ul>
            </div>

            {
                recipeInstructions ? 
                <div className="single-recipe__directions">
                <h3>
                    Directions
                </h3>
                <hr />

                <ol>
                    {
                        displayInstructions()
                    }
                </ol>
            </div>
            :
            <></>
            }
            

            <div className="single-recipe__nutrition">
                <h3>
                    Nutrition
                </h3>
                <hr />

                <div className="single-recipe__nutrition-details">
                    { displayNutrition() }
                </div>
            </div>

            <div className="single-recipe__similar-recipes">
                <h3>
                    Similar Recipes
                </h3>
                <hr />
                <div className="single-recipe__cards-wrapper">
                    {
                        displaySimilarRecipes()
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageSingleRecipe