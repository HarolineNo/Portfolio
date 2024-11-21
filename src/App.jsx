import './App.css';
import { Menu } from './components/Navbar';
import { About, Projects, Contact, Home } from './components/pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App
