import spoonacularLogo from '../img/spoonacular-logo.png';

const PageAbout = () => {
  return (
    <div className="page-about">
        <h1>
            About Food Searcher
        </h1>
        <div className="page-about__content">
            <div className="page-about__text">
                <p>
                    Welcome to the Food Searcher database. Here you will find a variety of recipes. Enjoy browsing and learning about the most popular dishes.
                </p>
                <p>
                    Food Searcher uses the Spoonacular API but is not endorsed or certified by TMBD.
                </p>
            </div>
            
            <img src={ spoonacularLogo } alt="spoonacular logo" className='page-about__logo'/>
        </div>
    </div>
  )
}

export default PageAbout;