import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className="search">
        <h2 className="search__heading">
            Search
        </h2>
        <div className="search__input-wrapper">
            <input type="text" placeholder="Search for recipe by name..." className="search__input" />
            <GoSearch className="search__icon"/>
        </div>
    </div>
  )
}

export default Search;