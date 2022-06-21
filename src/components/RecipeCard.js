import { Link } from 'react-router-dom';
import imgPlaceholder from '../img/banner-placeholder.jpg';
import RecipeCta from './RecipeCta';

const RecipeCard = ( { id, title, type } ) => {
    return (
        <>
            <div className="card">
                <Link to={ `/recipe/${ id }`}>
                    <img src={ `https://spoonacular.com/recipeImages/${ id }-636x393.${ type }` } alt={ title } />
                </Link>
                <div className="card__cta">
                    <RecipeCta id={ id } title={ title }/>
                </div>
            </div>

            {/* <div className="card">
                <Link to='/'>
                    <img src={ imgPlaceholder } alt="placeholder" />
                </Link>
                <div className="card__cta">
                    <RecipeCta />
                </div>
            </div>

            <div className="card">
                <Link to='/'>
                    <img src={ imgPlaceholder } alt="placeholder" />
                </Link>
                <div className="card__cta">
                    <RecipeCta />
                </div>
            </div>

            <div className="card">
                <Link to='/'>
                    <img src={ imgPlaceholder } alt="placeholder" />
                </Link>
                <div className="card__cta">
                    <RecipeCta />
                </div>
            </div> */}
        </>
    )
}

export default RecipeCard;