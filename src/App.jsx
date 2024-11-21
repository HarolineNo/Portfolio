import './App.css';
import { Route, Routes} from 'react-router-dom';
import { Menu } from './components/Navbar';
import { About, Projects, Contact, Home } from './components/pages';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <About />
    </div>
  );
}

export default App
