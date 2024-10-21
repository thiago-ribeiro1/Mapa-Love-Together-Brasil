import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#" className="highlight">Por que apoiar?</a></li>
        <li><a href="#">EN</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
