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
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/HarolineNo" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-container">
          <h5 className="contact-title">Contact</h5>
          <p className="phone">(973) 771-9969</p>
          <p className="email1">noesih1@montclair.edu</p>
          <p className="email2">harolinenoesi@gmail.com</p>
        </div>
      </div>
      <Navbar data-bs-theme="dark" className="footer-navbar">
        <Nav className="link-list">
          <h5 className="links-title">Menu</h5>
          <Nav.Link href="#Home" style={{paddingLeft: 0, color: 'white'}}>Home</Nav.Link>
          <Nav.Link href="#About" style={{paddingLeft: 0, color: 'white'}}>About</Nav.Link>
          <Nav.Link href="#Skills" style={{paddingLeft: 0, color: 'white'}}>Skills</Nav.Link>
          <Nav.Link href="#Projects" style={{paddingLeft: 0, color: 'white'}}>Projects</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}
