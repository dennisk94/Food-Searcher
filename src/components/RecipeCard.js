import { Link } from 'react-router-dom';
import imgPlaceholder from '../img/banner-placeholder.jpg';
import RecipeCta from './RecipeCta';

const RecipeCard = ( { title, img } ) => {
    console.log(title);

  return (
    <>
        <div className="card">
            <Link to={ `/recipe/${ title }` }>
                <img src={ img } alt={ title } />
            </Link>
            <div className="card__cta">
                <RecipeCta title={title}/>
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
        </div> */}
    </>
  )
}

export default RecipeCard;