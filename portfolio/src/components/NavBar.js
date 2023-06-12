import { Link } from 'react-scroll';
import { useState } from 'react';

const NavBar = ({ scrollTo }) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="home"
                    smooth={true}
                    duration={300}
                    offset={0}
                    onClick={() => scrollTo("home")}
                >
                    <strong>Murad</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="aboutMe"
                                smooth={true}
                                duration={300}
                                offset={0}
                                onClick={() => scrollTo("aboutMe")}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="projects"
                                smooth={true}
                                duration={300}
                                offset={0}
                                onClick={() => scrollTo("projects")}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="contact"
                                smooth={true}
                                duration={300}
                                offset={-50}
                                onClick={() => scrollTo("contact")}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
