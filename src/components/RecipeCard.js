import { Link } from 'react-router-dom';
import RecipeCta from './RecipeCta';

const RecipeCard = ( { id, title, type } ) => {
    return (
        <div className="card">
            <Link to={ `/recipe/${ id }`}>
                <img src={ `https://spoonacular.com/recipeImages/${ id }-636x393.${ type }` } alt={ title } />
            </Link>
            <div className="card__cta">
                <RecipeCta id={ id } title={ title }/>
            </div>
        </div>
    )
}

export default RecipeCard;