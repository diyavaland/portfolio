import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OtherProjects from './components/OtherProjects';
import SQLInjectionPrevention from './components/SQLInjectionPrevention';
import RealClientApp from './components/RealClientApp';
import Skills from './components/Skills';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/other-projects" element={<OtherProjects />} />
        <Route path="/sql-injection-prevention" element={<SQLInjectionPrevention />} />
        <Route path="/real-client-app" element={<RealClientApp />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* other routes */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
