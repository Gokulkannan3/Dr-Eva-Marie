import React from 'react';
import './Navbar.css'; // Assuming you'll style it separately

function Navbar({ activeLink, handleNavClick }) {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="brand">
          <img src="/logo.png" alt="DrEva Logo" className="brand-logo" />
        </div>

        <ul className="nav-links">
          {['home', 'about', 'videos', 'publications', 'podcasts', 'events'].map((link) => (
            <li
              key={link}
              className={`nav-item ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleNavClick(link)}
            >
              <a href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
