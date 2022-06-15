import { Link } from "react-router-dom"
import HeaderSearch from "./HeaderSearch"

const Header = () => {
  return (
    <header className="header">
        <Link to='/' className='header__logo'>Food Searcher</Link>
        <div className="header__search">
            <HeaderSearch />
        </div>
    </header>
  )
}

export default Header