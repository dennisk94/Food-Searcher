import { GoSearch } from "react-icons/go";

const SearchByIngredients = () => {
  return (
    <div className="search-ingredients">
        <h2 className="search-ingredients__heading">
            Search Recipe by Ingredients
        </h2>
        <div className="search-ingredients__filter">
            <p>
                Recipes 
            </p>
            <button>With</button>
            <button>Without</button>
        </div>
        <div className="search-ingredients__input-wrapper">
            
            <input type="text" className="search-ingredients__input" placeholder="Search recipes by ingredients..."/>
            <GoSearch className="search-ingredients__icon" />
        </div>
        <div className="search-ingredients__with">
            <p>
                With
            </p>
            <ul className="search-ingredients__list">
                <li>Pasta</li>
                <li>Chicken</li>
                <li>Onion</li>
                <li>Garlic</li>
            </ul>
        </div>
    </div>
  )
}

export default SearchByIngredients;