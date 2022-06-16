import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Cuisine from '../components/Cuisine';

const PageHome = () => {
  return (
    <div className="page-home">
      <Banner />
      <Popular />
      <Search />
      <Cuisine />
    </div>
  )
}

export default PageHome