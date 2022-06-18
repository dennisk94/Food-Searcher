import { useRef } from "react";
import { GoSearch } from "react-icons/go";

const Search = () => {

  let searchRef = useRef();
  
  const searchInputHandler = (e) => {
    e.preventDefault();
    const inputValue = searchRef.current.value;
    console.log(inputValue);
    // searchRef = '';
  };

  return (
    <div className="search">
        <h2 className="search__heading">
            Search
        </h2>
        <form onSubmit={searchInputHandler}>

        <div className="search__input-wrapper">
            <input 
              type="text" 
              placeholder="Search for recipe by name..." 
              className="search__input" 
              ref={ searchRef }
              />
            <GoSearch 
              className="search__icon"
              onClick={ searchInputHandler }
              />
        </div>
        </form>

    </div>
  )
}

export default Search;