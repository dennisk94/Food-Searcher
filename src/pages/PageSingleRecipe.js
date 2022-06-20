import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/apiKey';
import RecipeCard from '../components/RecipeCard';
import placeholder from '../img/banner-placeholder.jpg';

const PageSingleRecipe = () => {

    const [ singleRecipe, setSingleRecipe ] = useState(null);

    const { id } = useParams();
    console.log(id);

    useEffect( () => {
        // https://api.spoonacular.com/recipes/716429/information?apiKey=347319ca970f403bbca7249f58f33b62&includeNutrition=true
        // Get single recipe info
        const fetchPopularRecipes = async () => {
            const res = await fetch(`https://api.spoonacular.com/recipes/${ id }/information?apiKey=${ API_KEY }&includeNutrition=true`);
            let rawRecipeData = await res.json();
            console.log(rawRecipeData);
            // rawRecipeData = rawRecipeData.results.splice(0, 3);
            setSingleRecipe(rawRecipeData);
        };

        fetchPopularRecipes();
    }, [ id ]);

    if ( !singleRecipe ) {
        return;
    }

    const { title, 
            imageType, 
            // summary,
            servings,
            readyInMinutes,
            sourceName,
        } = singleRecipe;

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
                        Recipe By: { sourceName }
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
                    <li>Garlic</li>
                    <li>Onion</li>
                    <li>Chicken</li>
                    <li>Pasta</li>
                    <li>Canned Tomato</li>
                    <li>Butter</li>
                    <li>Bell Pepper</li>
                    <li>Sugar</li>
                </ul>
            </div>

            <div className="single-recipe__directions">
                <h3>
                    Directions
                </h3>
                <hr />

                <div className="single-recipe__step">
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
                </div>
            </div>

            <div className="single-recipe__nutrition">
                <h3>
                    Nutrition
                </h3>
                <hr />

                <div className="single-recipe__nutrition-details">
                    <div className="single-recipe__nutrition-detail">
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
                    </div>
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