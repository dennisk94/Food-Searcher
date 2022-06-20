import RecipeCard from "./RecipeCard";

const SearchResultsByIngredients = ( { recipeByIngredients } ) => {
    console.log(recipeByIngredients);
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
  
      {/* {
        searchRecipes.map( ( recipe ) => 
        <RecipeCard key={ recipe.id } id={ recipe.id } title={recipe.title} img={recipe.image} type={ recipe.imageType }/>
        )
      } */}
    </div>
  )
}

export default SearchResultsByIngredients