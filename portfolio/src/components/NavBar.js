import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <Link className='showlink' to='/'>
                Home
            </Link>
            <Link className='showlink' to='/skills'>
                My Skills
            </Link>
            <Link className='showlink' to='/projects'>
                Projects
            </Link>
            <Link className='showlink' to='/work'>
                Work Experience
            </Link>
            <Link className='showlink' to='/contact'>
                Contact me
            </Link>
        </div>
    )
}
export default Navbar;