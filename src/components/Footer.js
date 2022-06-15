import { getYear } from '../utilities/getDates';

const Footer = () => {
  return (
    <footer className='footer'>
        <p>
            &copy; Dennis Kim | { getYear() }
        </p>
    </footer>
  )
}

export default Footer