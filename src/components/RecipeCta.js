import { Link } from 'react-router-dom';

const RecipeCta = ( { title } ) => {
  return (
    <div className='cta'>
          <h2 className='cta__heading'>
            <Link to={ `/recipe/${ title }` } >
              { title }
            </Link>
          </h2>
        
        <Link to={ `/recipe/${ title }` } className='cta__link'>View Recipe</Link>
    </div>
  )
}

export default RecipeCta