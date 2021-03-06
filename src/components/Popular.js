import RecipeCard from "./RecipeCard";
import ViewMore from "./ViewMore";

const Popular = ( { popularRecipes } ) => {
  return (
    <div className="popular">
      <h2>
        Popular
      </h2>
      <div className="cards-wrapper">
      {
        popularRecipes.map( ( recipe ) => 
          <RecipeCard key={ recipe.id } id={ recipe.id } title={recipe.title} img={recipe.image} type={ recipe.imageType }/>
        )
      }
      </div>
      <ViewMore slug='popular'/>
    </div>
  )
}

export default Popular