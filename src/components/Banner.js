import placeHolder from '../img/banner-placeholder.jpg';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Banner = ( { randomRecipes } ) => {
  return (
    <div className="banner">
        {
          randomRecipes && randomRecipes.map( ( recipe, i ) => <RecipeCard key={ recipe.id } 
                                                                          id={ recipe.id } 
                                                                          title={recipe.title} 
                                                                          type={ recipe.imageType }/>)
        }
        {/* <img src={ placeHolder } alt="Banner" className='banner__img'/>
        <div className="banner__overlay"></div>
        <div className="banner__text">
          <h2 className='banner__heading'>
            <Link to='/' className='banner__title'>
              Recipe Title
            </Link>
          </h2>
        
          <Link to='/' className='banner__link'>View Recipe</Link>
        </div> */}
    </div>
  )
}

export default Banner