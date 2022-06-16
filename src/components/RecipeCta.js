import { Link } from 'react-router-dom';

const RecipeCta = () => {
  return (
    <div className='cta'>
          <h2 className='cta__heading'>
            <Link to='/' >
              Recipe Title
            </Link>
          </h2>
        
        <Link to='/' className='cta__link'>View Recipe</Link>
    </div>
  )
}

export default RecipeCta