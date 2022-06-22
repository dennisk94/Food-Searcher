import RecipeCard from "./RecipeCard";

const SearchResults = ( { searchRecipes } ) => {
  return (
    <div className="results">
      {
        searchRecipes ?  
        <div className="cards-wrapper">
          {
            searchRecipes.map( ( recipe ) => 
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

export default SearchResults