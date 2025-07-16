import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect Scroll to Apply Background Blur Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile Menu Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/30 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-white">My Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="cursor-pointer hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="cursor-pointer hover:text-blue-400"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="cursor-pointer hover:text-blue-400"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="cursor-pointer hover:text-blue-400"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="cursor-pointer hover:text-blue-400"
            >
              Contact
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="cursor-pointer hover:text-blue-400"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu with Animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="md:hidden fixed top-0 left-0 w-2/3 h-full bg-black/90 text-white flex flex-col space-y-6 py-6 px-4"
            >
              <button
                className="self-end text-2xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="hover:text-blue-400 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="hover:text-blue-400 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="hover:text-blue-400 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="hover:text-blue-400 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
