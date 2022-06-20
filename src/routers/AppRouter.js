import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';
import PageHome from "../pages/PageHome";
import PageSingleRecipe from "../pages/PageSingleRecipe";
import PageSingleCategory from '../pages/PageSingleCategory';

function AppRouter() {
  return (
    <div className="App">
      <Header />
        <main className="main">
        <Routes>
          <Route index element={<PageHome/>}/>
          <Route path='/recipe/:slug' element={<PageSingleRecipe />}/>
          <Route path='/recipes/:slug' element={<PageSingleCategory />}></Route>
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default AppRouter;
