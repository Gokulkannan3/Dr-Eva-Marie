import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar'; // Import Navbar component
import About from '../About/About';
import Videos from '../Videos/Videos';
import Publications from '../Publications/Publications';
import Podcasts from '../Podcasts/Podcasts';
import Events from '../Events/Events';

function Home({ setAtHome }) {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (link) => {
    setActiveLink(link);
    if (link !== "home") {
      setAtHome(false);
    } else {
      setAtHome(true);
    }
  };

  const renderContent = () => {
    switch (activeLink) {
      case "home":
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
                Welcome to Dr. Eva-Marie Muller-Stuler’s private website. Due to
                confidentiality, this website does not contain client
                credentials or information and focuses only on public events.
              </p>
            </div>
          </section>
        );
      case "about":
        return <About />;
      case "videos":
        return <Videos />;
      case "publications":
        return <Publications />;
      case "podcasts":
        return <Podcasts />;
      case "events":
        return <Events />;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <Navbar
        activeLink={activeLink}
        handleNavClick={handleNavClick}
        setAtHome={setAtHome}
      />
      {renderContent()}
    </div>
  );
}

export default Home;
