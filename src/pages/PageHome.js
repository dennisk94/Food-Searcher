import Banner from "../components/Banner"
import PopularRecipes from "../components/PopularRecipes"
import Search from "../components/Search"

const PageHome = () => {
  return (
    <div className="page-home">
      <Banner />
      <PopularRecipes />
      <Search />
    </div>
  )
}

export default PageHome