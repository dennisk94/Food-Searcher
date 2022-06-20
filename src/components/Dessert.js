import RecipeCard from "./RecipeCard";
import ViewMore from "./ViewMore";

const Dessert = ( { dessertRecipes } ) => {
  return (
    <div className="category">
      <h2>
        Dessert
      </h2>
      <div className="cards-wrapper">
        {/* {
          dessertRecipes.map( ( recipe ) => 
            <RecipeCard key={ recipe.id } id={ recipe.id } title={recipe.title} img={recipe.image} type={ recipe.imageType }/>
          )
        } */}
        <RecipeCard />
      </div>
      <ViewMore slug='dessert'/>
    </div>
  )
}

export default Dessert;