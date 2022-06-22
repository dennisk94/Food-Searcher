import { Link } from 'react-router-dom';

const BannerCardsCta = ( { id, title } ) => {
    return (
        <div className='cta'>
            <h2 className='cta__heading'>
                <Link to={ `/recipe/${ id }` } >
                { title }
                </Link>
            </h2>
        </div>
    )
}

export default BannerCardsCta