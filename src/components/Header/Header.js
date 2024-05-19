import './Header.css'
import { Link } from 'react-router-dom/dist'

const Header = () => {
   return (
    <div className='bg-container'>
       <Link to="/" className='link'> <h1 className='heading'>NewsApp</h1> </Link>
       <ul className='nav-links'>
        <Link to="/" className='link'>
        <li>Home</li>
        </Link>
        <Link to="/about" className='link'>
        <li>
            About
        </li>
        </Link>
       </ul>
    </div>
   )
}
export default Header
