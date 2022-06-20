import RecipeCard from "./RecipeCard";
import ViewMore from "./ViewMore";

const Nutrients = ( { veganRecipes } ) => {
  return (
    <div className="nutrients">
      <h2>
        Vegan
      </h2>
      <div className="cards-wrapper">
        {/* {
          veganRecipes.map( ( recipe ) => 
          <RecipeCard key={ recipe.id } id={ recipe.id } title={recipe.title} img={recipe.image} type={ recipe.imageType }/>
          )
        } */}
        <RecipeCard />
      </div>
      <ViewMore slug='Vegan'/>
    </div>
  )
}

export default Nutrients;