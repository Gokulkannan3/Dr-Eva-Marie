import React, { useState } from 'react';
import './Home.css';
import About from '../About/About';
import Videos from '../Videos/Videos';
import Publications from '../Publications/Publications';
import Podcasts from '../Podcasts/Podcasts';
import Events from '../Events/Events';

function Home() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  // Render content based on the active menu item.
  // For 'home', we define the hero content inline.
  const renderContent = () => {
    switch (activeLink) {
      case 'home':
        return (
          <section className="hero-section" id="home">
   <div className="hero-portrait">
  <img
    src="/pp.png"
    alt="Portrait of Dr. Eva-Marie Muller-Stuler"
  />
</div>

            <div className="hero-text">
              <h1>DR. EVA MARIE MULLER-STULER</h1>
              <p>
                Welcome to Dr. Eva-Marie Muller-Stuler’s private website. Due to confidentiality, this website does not contain client credentials or information and focuses only on public events.
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
      {/* NAVBAR */}
      <div className="navbar-wrapper">
        <nav className="navbar">
        <div className="brand">
  <img src="/logo.png" alt="DrEva Logo" className="brand-logo" />
</div>

          <ul className="nav-links">
            <li
              className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`nav-item ${activeLink === 'videos' ? 'active' : ''}`}
              onClick={() => handleNavClick('videos')}
            >
              <a href="#videos">Videos</a>
            </li>
            <li
              className={`nav-item ${activeLink === 'publications' ? 'active' : ''}`}
              onClick={() => handleNavClick('publications')}
            >
              <a href="#publications">Publications</a>
            </li>
            <li
              className={`nav-item ${activeLink === 'podcasts' ? 'active' : ''}`}
              onClick={() => handleNavClick('podcasts')}
            >
              <a href="#podcasts">Podcasts</a>
            </li>
            <li
              className={`nav-item ${activeLink === 'events' ? 'active' : ''}`}
              onClick={() => handleNavClick('events')}
            >
              <a href="#events">Events</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Render the section content below the navbar */}
      {renderContent()}
    </div>
  );
}

export default Home;
