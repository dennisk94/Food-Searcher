import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import placeholder from '../img/banner-placeholder.jpg';

const PageSingleRecipe = () => {

    const { slug } = useParams();
    console.log(slug);
  return (
    <div className='single-recipe'>
        <div className="single-recipe__banner">
            <div className="single-recipe__overview">
                <h1>
                    Title
                </h1>
                <p className='single-recipe__text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quo fugiat itaque. Quas aperiam eum itaque modi optio, debitis sequi. Aspernatur ut maxime accusamus quia deserunt delectus mollitia nobis aliquid! Lorem ipsum dolor.
                </p>

                <div className="single-recipe__info">
                    <h3>
                        Serving Size: 2
                    </h3>

                    <h3>
                        Prep Time: 20 min
                    </h3>

                    <h3>
                        Cook Time: 20 min
                    </h3>
                </div>
            </div>

            <img src={ placeholder } alt="placeholder" className='single-recipe__img'/>
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