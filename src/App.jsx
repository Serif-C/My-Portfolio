import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Skills from "./components/Skills";



function App() {
  return (
    <Router>
      <Navbar />
      {/* Sections with Gradient Transitions */}
      <Hero />
        <div className="section-gradient"></div> {/* Smooth transition */}
        
        <About />
        <div className="section-gradient"></div> {/* Smooth transition */}

        <Projects />
        <div className="section-gradient"></div> {/* Smooth transition */}

        <Skills />
        <div className="section-gradient"></div> {/* Smooth transition */}

        <Contact />
        <div className="section-gradient"></div> {/* Smooth transition */}

        <Resume />
      {/* <div id="contact" className="h-screen flex justify-center items-center bg-gray-900 text-white text-4xl">📧 Contact Me</div> */}
    </Router>
  );
}

export default App;
