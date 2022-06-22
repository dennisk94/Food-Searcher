import RecipeCard from "./RecipeCard";

const SearchResultsByIngredients = ( { recipeByIngredients } ) => {
  return (
    <div className="results">
      {
        recipeByIngredients ?  
        <div className="cards-wrapper">
          {
            recipeByIngredients.map( ( recipe ) => 
            <RecipeCard key={ recipe.id } id={ recipe.id } title={recipe.title} img={recipe.image} type={ recipe.imageType }/>
            )
          }
        </div>
        :
        <></>
      }
    </div>
  )
}

export default SearchResultsByIngredients