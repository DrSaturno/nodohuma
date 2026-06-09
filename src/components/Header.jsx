import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section tracking for active state
      const sections = ['inicio', 'esencia', 'problema', 'ecosistema', 'metodologia', 'faq', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="logo-container" onClick={(e) => handleNavClick(e, 'inicio')}>
        {/* Animated Node Logo SVG */}
        <svg className="logo-svg" width="45" height="40" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connecting lines */}
          <line x1="25" y1="65" x2="55" y2="25" stroke="#fcfbf9" strokeWidth="2" />
          <line x1="55" y1="25" x2="75" y2="55" stroke="#fcfbf9" strokeWidth="2" />
          <line x1="25" y1="65" x2="75" y2="55" stroke="#fcfbf9" strokeWidth="2" />
          
          {/* Node 1: Left (White) */}
          <circle cx="25" cy="65" r="8" fill="#fcfbf9" />
          <circle cx="25" cy="65" r="14" stroke="#fcfbf9" strokeWidth="1" strokeOpacity="0.3" />
          
          {/* Node 2: Top (Sage) */}
          <circle cx="55" cy="25" r="10" fill="#7a8d74" />
          <circle cx="55" cy="25" r="18" stroke="#7a8d74" strokeWidth="1" strokeOpacity="0.4" />
          
          {/* Node 3: Right (Dark Sage) */}
          <circle cx="75" cy="55" r="6" fill="#a3b59d" />
        </svg>
        <div className="logo-text">
          <h3>NODO</h3>
          <span>HUMA</span>
        </div>
      </a>

      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menú de navegación"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isMobileMenuOpen ? (
            <path d="M18 6L6 18M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </button>

      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a 
          href="#esencia" 
          className={`nav-link ${activeSection === 'esencia' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'esencia')}
        >
          Esencia
        </a>
        <a 
          href="#problema" 
          className={`nav-link ${activeSection === 'problema' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'problema')}
        >
          El Problema
        </a>
        <a 
          href="#ecosistema" 
          className={`nav-link ${activeSection === 'ecosistema' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'ecosistema')}
        >
          Ecosistema
        </a>
        <a 
          href="#metodologia" 
          className={`nav-link ${activeSection === 'metodologia' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'metodologia')}
        >
          Metodología
        </a>
        <a 
          href="#faq" 
          className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'faq')}
        >
          Preguntas
        </a>
        <a 
          href="#contacto" 
          className="btn btn-secondary"
          style={{ padding: '8px 20px', fontSize: '0.9rem', marginTop: 0 }}
          onClick={(e) => handleNavClick(e, 'contacto')}
        >
          Diagnóstico
        </a>
      </nav>
    </header>
  );
};

export default Header;
