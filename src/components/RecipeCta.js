import { Link } from 'react-router-dom';

const RecipeCta = ( { id, title } ) => {
  return (
    <div className='cta'>
          <h2 className='cta__heading'>
            <Link to={ `/recipe/${ id }` } >
              { title }
            </Link>
          </h2>
        
        <Link to={ `/recipe/${ id }` } className='cta__link'>View Recipe</Link>
    </div>
  )
}

export default RecipeCta