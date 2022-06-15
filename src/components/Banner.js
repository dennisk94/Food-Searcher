import placeHolder from '../img/banner-placeholder.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
        <img src={ placeHolder } alt="Banner" className='banner__img'/>
        <div className="banner__overlay"></div>
        <div className="banner__text">
            <h1>
                Featured Recipe Title
            </h1>
            <Link to='/'>View Recipe</Link>
        </div>
    </div>
  )
}

export default Banner