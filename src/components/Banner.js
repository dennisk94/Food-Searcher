import placeHolder from '../img/banner-placeholder.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
        <img src={ placeHolder } alt="Banner" className='banner__img'/>
        <div className="banner__overlay"></div>
        <div className="banner__text">
          <h2 className='banner__heading'>
            <Link to='/' className='banner__title'>
              Recipe Title
            </Link>
          </h2>
        
          <Link to='/' className='banner__link'>View Recipe</Link>
        </div>
    </div>
  )
}

export default Banner