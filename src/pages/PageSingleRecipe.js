import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/apiKey';
import RecipeCard from '../components/RecipeCard';
import placeholder from '../img/banner-placeholder.jpg';

const PageSingleRecipe = () => {

    const [ singleRecipe, setSingleRecipe ] = useState(null);
    const [ recipeInstructions, setRecipeInstructions ] = useState( null );

    const { id } = useParams();
    console.log(id);

    useEffect( () => {
        // https://api.spoonacular.com/recipes/716429/information?apiKey=347319ca970f403bbca7249f58f33b62&includeNutrition=true
        // Get single recipe info
        const fetchSingleRecipe = async () => {
            const res = await fetch(`https://api.spoonacular.com/recipes/${ id }/information?apiKey=${ API_KEY }&includeNutrition=true`);
            let rawRecipeData = await res.json();
            console.log(rawRecipeData);
            // rawRecipeData = rawRecipeData.results.splice(0, 3);
            setSingleRecipe(rawRecipeData);
        };

        fetchSingleRecipe();
        
        // Get recipe instructions
        const fetchRecipeInstructions = async () => {
            console.log(id);
            const res = await fetch(`https://api.spoonacular.com/recipes/${ id }/analyzedInstructions?apiKey=${ API_KEY }`);
            let rawRecipeData = await res.json();
            console.log(rawRecipeData[0].steps);
            // rawRecipeData = rawRecipeData.results.splice(0, 3);
            if ( rawRecipeData.length === 0 ) {
                setRecipeInstructions(null);
            } else {
                setRecipeInstructions(rawRecipeData[0].steps);
            }
        };

        fetchRecipeInstructions();
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
        // console.log(recipeInstructions.length);
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

  return (
    <div className='single-recipe'>
        <div className="single-recipe__banner">
            <div className="single-recipe__overview">
                <h1>
                    { title }
                </h1>
                {/* <p className='single-recipe__text'>
                    {
                        summary
                    }
                </p> */}

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

                {/* <div className="single-recipe__step">
                    <h4>
                        Step 1
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id debitis temporibus illum? Quas nobis cumque officia incidunt beatae delectus repudiandae reprehenderit quos, laboriosam dolore a adipisci, vero voluptas asperiores.
                    </p>
                </div>
               
                
                <div className="single-recipe__step">
                    <h4>
                        Step 2
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id debitis temporibus illum? Quas nobis cumque officia incidunt beatae delectus repudiandae reprehenderit quos, laboriosam dolore a adipisci, vero voluptas asperiores.
                    </p>
                </div>

                
                <div className="single-recipe__step">
                    <h4>
                        Step 3
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id debitis temporibus illum? Quas nobis cumque officia incidunt beatae delectus repudiandae reprehenderit quos, laboriosam dolore a adipisci, vero voluptas asperiores.
                    </p>
                </div>

                
                <div className="single-recipe__step">
                    <h4>
                        Step 4
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id debitis temporibus illum? Quas nobis cumque officia incidunt beatae delectus repudiandae reprehenderit quos, laboriosam dolore a adipisci, vero voluptas asperiores.
                    </p>
                </div>

                
                <div className="single-recipe__step">
                    <h4>
                        Step 5
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id debitis temporibus illum? Quas nobis cumque officia incidunt beatae delectus repudiandae reprehenderit quos, laboriosam dolore a adipisci, vero voluptas asperiores.
                    </p>
                </div> */}
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
                    {/* <div className="single-recipe__nutrition-detail">
                        <p>
                            540 Cal
                        </p>
                    </div>
                    <div className="single-recipe__nutrition-detail">
                        <p>
                            20g Protein
                        </p>
                    </div>
                    <div className="single-recipe__nutrition-detail">
                        <p>
                            15g Fat
                        </p>
                    </div>
                    <div className="single-recipe__nutrition-detail">
                        <p>
                            40g Carbs
                        </p>
                    </div>
                    <div className="single-recipe__nutrition-detail">
                        <p>
                            5g Fiber
                        </p>
                    </div> */}
                </div>
            </div>

            <div className="single-recipe__similar-recipes">
                <h3>
                    Similar Recipes
                </h3>

                <RecipeCard />
            </div>
        </div>
    </div>
  )
}

export default PageSingleRecipe