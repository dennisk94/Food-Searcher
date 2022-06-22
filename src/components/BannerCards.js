import { Link } from 'react-router-dom';
import BannerCardsCta from './BannerCardsCta';

const BannerCards = ( { i, id, title, type } ) => {
  return (
    <div className={`banner-card iteration-${ i }`}>
        <Link to={ `/recipe/${ id }`} className='banner-card__a'>
            <img src={ `https://spoonacular.com/recipeImages/${ id }-636x393.${ type }` } alt={ title } />
        </Link>
        <div className="banner-card__cta">
            <BannerCardsCta id={ id } title={ title }/>
        </div>
    </div>
  )
}

export default BannerCards;