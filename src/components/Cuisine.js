import RecipeCard from "./RecipeCard";
import ViewMore from "./ViewMore";

const Cuisine = ( { cuisineRecipes } ) => {
  return (
    <div className="cuisine">
      <h2>
        Italian
      </h2>
      <div className="cards-wrapper">
        {/* {
          cuisineRecipes.map( ( recipe ) => 
          <RecipeCard key={ recipe.id } id={ recipe.id } title={recipe.title} img={recipe.image} type={ recipe.imageType }/>
          )
        } */}
        <RecipeCard />
      </div>
      <ViewMore slug='italian'/>
    </div>
  )
}

export default Cuisine;