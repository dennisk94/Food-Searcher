import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Cuisine from '../components/Cuisine';
import Category from "../components/Category";
import Nutrients from "../components/Nutrients";

const PageHome = () => {
  return (
    <div className="page-home">
      <Banner />
      <Popular />
      <Search />
      <Cuisine />
      <Category />
      <Nutrients />
    </div>
  )
}

export default PageHome