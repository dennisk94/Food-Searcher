import BannerCards from './BannerCards';

const Banner = ( { randomRecipes } ) => {
  return (
    <div className="banner">
        {
          randomRecipes && randomRecipes.map( ( recipe, i ) => <BannerCards key={ recipe.id } 
                                                                            i={ i }
                                                                            id={ recipe.id } 
                                                                            title={recipe.title} 
                                                                            type={ recipe.imageType }
          />)
        }
    </div>
  )
}

export default Banner