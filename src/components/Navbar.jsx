import '../components/styles/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="">Haroline</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
