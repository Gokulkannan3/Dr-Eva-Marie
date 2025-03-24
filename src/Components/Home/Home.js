import React, { useState } from 'react';
import './Home.css';
import About from '../About/About';
import Videos from '../Videos/Videos';
import Publications from '../Publications/Publications';
import Podcasts from '../Podcasts/Podcasts';
import Events from '../Events/Events';

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
              <a 
                href={`#${link}`} 
                onClick={(e) => e.preventDefault()}  // Prevent default scrolling behavior
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Home({ setAtHome }) {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (link) => {
    setActiveLink(link);
    // Update background state based on the active link
    if (link !== 'home') {
      setAtHome(false);
    } else {
      setAtHome(true);
    }
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'home':
        return (
          <section className="hero-section" id="home">
            <div className="hero-portrait">
              <img src="/pp.png" alt="Portrait of Dr. Eva-Marie Muller-Stuler" />
            </div>
            <div className="hero-text">
              <h1>DR. EVA MARIE MULLER-STULER</h1>
              <p>
                Welcome to Dr. Eva-Marie Muller-Stuler’s private website. Due to confidentiality, this website does not
                contain client credentials or information and focuses only on public events.
              </p>
            </div>
          </section>
        );
      case 'about':
        return <About />;
      case 'videos':
        return <Videos />;
      case 'publications':
        return <Publications />;
      case 'podcasts':
        return <Podcasts />;
      case 'events':
        return <Events />;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <Navbar activeLink={activeLink} handleNavClick={handleNavClick} />
      {renderContent()}
    </div>
  );
}

export default Home;
