import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';
import PageHome from "../pages/PageHome";

function AppRouter() {
  return (
    <div className="App">
      <Header />
        <main className="main">
        <Routes>
          <Route index element={<PageHome/>}/>
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default AppRouter;
