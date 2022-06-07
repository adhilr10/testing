import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Mobile from './components/Home/Mobile'
import What from './components/Question/What';

function App() {
  return (
    <BrowserRouter>
    <Mobile />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="About" element={ <About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="question" element={<What />} />
    
    
    </Routes>
      </BrowserRouter>
  );
}

export default App;
