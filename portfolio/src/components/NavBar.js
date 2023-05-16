import { Link } from 'react-scroll';

const NavBar = ({ scrollTo }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="home" smooth={true} duration={300} offset={-100} onClick={() => scrollTo("home")}>
                    <strong>Murad</strong>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="aboutMe" smooth={true} duration={300} offset={-50} onClick={() => scrollTo("resume")}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="projects" smooth={true} duration={300} offset={-50} onClick={() => scrollTo("projects")}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={300} offset={-50} onClick={() => scrollTo("contact")}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar