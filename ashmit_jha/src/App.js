import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Skills from './components/Skills.jsx';
import Works from './components/Works.jsx';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
