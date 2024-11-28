import '../styles/Contact.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Contact = () => {
  return (
    <div className="footer">
      <div className="footer-name">
        <h2>Haroline Noesi</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/harolinen/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{color: "white"}}></i>
          </a>
          <a href="https://github.com/HarolineNo" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" style={{color: "white"}}></i>
          </a>
        </div>
      </div>
      <div className="footer-footer">
        <div className="contact-info">
          <div className="contact-container">
            <p className="phone">(973) 771-9969</p>
            <p className="email1">noesih1@montclair.edu</p>
            <p className="email2">harolinenoesi@gmail.com</p>
          </div>
        </div>
        <Navbar data-bs-theme="dark" className="footer-navbar">
          <Nav className="link-list">
            <Nav.Link href="#Home" style={{paddingLeft: 0, color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="#About" style={{paddingLeft: 0, color: 'white'}}>About</Nav.Link>
            <Nav.Link href="#Skills" style={{paddingLeft: 0, color: 'white'}}>Skills</Nav.Link>
            <Nav.Link href="#Projects" style={{paddingLeft: 0, color: 'white'}}>Projects</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}
