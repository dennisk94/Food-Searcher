import RecipeCard from "./RecipeCard";
import ViewMore from "./ViewMore";

const Popular = ( { popularRecipes } ) => {
  console.log(popularRecipes);
  return (
    <div className="popular">
      <h2>
        Popular
      </h2>
      <div className="cards-wrapper">
      {
        popularRecipes.map( ( recipe ) => 
          <RecipeCard key={ recipe.id } title={recipe.title} img={recipe.image}/>
        )
      }
      </div>
      <ViewMore />
    </div>
  )
}

export default Popular