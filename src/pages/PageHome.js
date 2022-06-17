import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Cuisine from '../components/Cuisine';
import Category from "../components/Category";
import Nutrients from "../components/Nutrients";
import SearchByIngredients from "../components/SearchByIngredients";
import SearchResults from "../components/SearchResults";

const PageHome = () => {
  return (
    <div className="page-home">
      <Banner />
      <Popular />
      <Search />
      <SearchResults />
      <Cuisine />
      <Category />
      <Nutrients />
      <SearchByIngredients />
      <SearchResults />
    </div>
  )
}

export default PageHome