import Banner from "../components/Banner"
import PopularRecipes from "../components/PopularRecipes"

const PageHome = () => {
  return (
    <div className="page-home">
      <Banner />
      <PopularRecipes />
    </div>
  )
}

export default PageHome