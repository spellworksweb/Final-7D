import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body lock for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-lock');
    } else {
      document.body.classList.remove('body-lock');
    }
    return () => {
      document.body.classList.remove('body-lock');
    };
  }, [isMenuOpen]);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-2 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left side */}
            <div className="flex items-center gap-2 md:gap-3 scale-hover">
              <svg width="120" height="60" viewBox="0 0 160 80" className="w-auto h-8 md:h-12">
                <rect width="160" height="80" fill="transparent" rx="8" />
                {/* Crown */}
                <path
                  d="M65 20 L80 10 L95 20 L90 30 L70 30 L65 20Z"
                  fill="Yellow"
                  className="transform-origin-center"
                />
                {/* 7D Text */}
                <text
                  x="20"
                  y="50"
                  fontFamily="Inter"
                  fontSize="24"
                  fontWeight="900"
                  fill="Yellow"
                >
                  7D
                </text>
                {/* DETAILING Text */}
                <text
                  x="50"
                  y="50"
                  fontFamily="Inter"
                  fontSize="16"
                  fontWeight="700"
                  fill="Yellow"
                >
                  DETAILING
                </text>
                {/* Blue Stroke */}
                <path
                  d="M40 60 Q80 55 120 60"
                  stroke="#0066cc"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Red Stroke */}
                <path
                  d="M40 65 Q80 70 120 65"
                  stroke="#cc0000"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gold">7D Detailing</span>
              </div>
            </div>

            {/* Navigation Links - Right side */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`nav-link text-glow transition-colors duration-300 ${
                    activeSection === section ? 'text-gold' : 'text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gold scale-hover p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 z-40"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false);
              }
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative h-full w-full mobile-menu-backdrop">
              <div className="flex flex-col space-y-2 p-6 pt-20">
                {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={handleNavClick}
                    className={`nav-link text-glow transition-all duration-300 text-center ${
                      activeSection === section ? 'text-gold' : 'text-white'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            filter: "brightness(0.5)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-darker/50 to-dark/90"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
              Experience 
              <span className="text-gold"> Perfection</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300">
              Elevating automotive aesthetics to new heights
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gold text-dark-darker px-8 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Gallery />
      <Contact />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918122104339"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <Footer />
    </div>
  );
}

export default App;