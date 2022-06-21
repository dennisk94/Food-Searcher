import { Link } from "react-router-dom"
import { FaLeaf } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
        <Link to='/' className='header__logo'><FaLeaf /></Link>
        <div className="header__about">
            <Link to='/about'>About</Link>
        </div>
    </header>
  )
}

export default Header