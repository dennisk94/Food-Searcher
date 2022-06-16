import { Link } from 'react-router-dom';
import imgPlaceholder from '../img/banner-placeholder.jpg';
import RecipeCta from './RecipeCta';

const PopularRecipes = () => {
  return (
    <div className="popular">
      <h2>
        Popular
      </h2>
      <div className="popular__cards-wrapper">
        <div className="popular__card">
          <Link to='/'>
            <img src={ imgPlaceholder } alt="placeholder" />
          </Link>
          <div className="popular__cta">
            <RecipeCta />
          </div>
        </div>

        <div className="popular__card">
          <Link to='/'>
            <img src={ imgPlaceholder } alt="placeholder" />
          </Link>
          <div className="popular__cta">
            <RecipeCta />
          </div>
        </div>

        <div className="popular__card">
          <Link to='/'>
            <img src={ imgPlaceholder } alt="placeholder" />
          </Link>
          <div className="popular__cta">
            <RecipeCta />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularRecipes