import { Link } from 'react-router-dom';
import imgPlaceholder from '../img/banner-placeholder.jpg';
import RecipeCta from './RecipeCta';

const RecipeCard = () => {
  return (
    <div className="cards-wrapper">
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
        </div>

        <div className="card">
            <Link to='/'>
                <img src={ imgPlaceholder } alt="placeholder" />
            </Link>
            <div className="card__cta">
                <RecipeCta />
            </div>
        </div>
  </div>
  )
}

export default RecipeCard;