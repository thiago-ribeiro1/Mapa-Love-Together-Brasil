import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu} aria-expanded={isOpen} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="https://lovetogetherbrasil.org/sobre-nos">Sobre nós</a></li>
        <li><a href="https://lovetogetherbrasil.org/contato">Contato</a></li>
        <li><a href="https://lovetogetherbrasil.org/doe" className="highlight">Por que apoiar?</a></li>
        <li><a href="https://give.lovetogetherbrazilusa.com/">EN</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
