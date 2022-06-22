import { useRef } from "react";
import { GoSearch } from "react-icons/go";

const SearchByIngredients = ( { setFilterTerm, filterTerms } ) => {

    let filterRef = useRef();

    const filterHandler = (e) => {
        e.preventDefault();
        const filterTerm = filterRef.current.value;
        if ( filterTerm !== '' ) {
            console.log(filterTerms);
            setFilterTerm([...filterTerms, filterTerm]);
            filterRef.current.value = '';
        }
    }

  return (
    <div className="search-ingredients">
        <h2 className="search-ingredients__heading">
            Search Recipe by Ingredients
        </h2>
        <form onSubmit={ filterHandler }>
            <div className="search-ingredients__input-wrapper">
                    <input 
                        type="text" 
                        className="search-ingredients__input" 
                        placeholder="Search recipes by ingredients..."
                        ref={ filterRef }    
                    />
                    <GoSearch 
                        className="search-ingredients__icon" 
                        onClick={ filterHandler }/>
            </div>
        </form>
        <div className="search-ingredients__with">
            {
                filterTerms ? 
                <>
                    <h3>
                        With
                    </h3>
                    <ul className="search-ingredients__list">
                        {
                            filterTerms.map( ( term ) => <li>{ term }</li>)
                        }
                    </ul>
                </>
                :
                <></>
            }
        </div>
    </div>
  )
}

export default SearchByIngredients;