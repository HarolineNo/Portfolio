import './App.css';
import { Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About, Projects, Contact, Home } from './components/pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
