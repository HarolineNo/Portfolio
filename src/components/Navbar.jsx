import { useState } from 'react';
import './styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="title">Haroline</Link>
            <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}
