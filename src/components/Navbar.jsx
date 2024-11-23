import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/Navbar.css';

export const Menu = () => {
    return (
        <Navbar data-bs-theme="dark" className="navbar">
            <Navbar.Brand href="#Home">Haroline</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}