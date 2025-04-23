import React, { useState } from 'react';
import './Home.css';
import About from '../About/About';
import Videos from '../Videos/Videos';
import Publications from '../Publications/Publications';
import Podcasts from '../Podcasts/Podcasts';
import Events from '../Events/Events';
import Contact from '../Contact/Contact';

function Navbar({ activeLink, handleNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['home', 'about', 'videos', 'publications', 'podcasts', 'events', 'contact'];

  const handleClick = (link) => {
    handleNavClick(link);
    setIsOpen(false); // Close menu on click
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="brand">
          <img src="/logo.png" alt="DrEva Logo" className="brand-logo" />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        {/* Desktop nav */}
        <ul className="nav-links desktop-only">
          {links.map((link) => (
            <li
              key={link}
              className={`nav-item ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleClick(link)}
            >
              <a href={`#${link}`} onClick={(e) => e.preventDefault()}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <ul className="nav-links mobile-menu">
          {links.map((link) => (
            <li
              key={link}
              className={`nav-item ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleClick(link)}
            >
              <a href={`#${link}`} onClick={(e) => e.preventDefault()}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
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
          <>
          <section className="hero-section" id="home">
            <div className="hero-portrait">
              <img src="/pp.png" alt="Portrait of Dr. Eva-Marie Muller-Stuler" />
            </div>
            <div className="hero-text">
              <h1>DR. EVA MARIE MULLER-STULER</h1>
              <p>
                Dr. Eva-Marie Muller-Stuler leads the Data & AI practice for Ernst & Young across the Middle East and North Africa.
                Previously CTO for AI at IBM, she’s a global pioneer in ethical and responsible AI.
              </p>
            </div>
      
          </section>
          <section className="speaker-about content-section" id="speaker-about">
              <h2>About Me</h2>
              <p>
              Dr. Eva-Marie Muller-Stuler is leading the Data & AI practice for Ernst & Young for the Middle East and North Africa. She is responsible for the development of Data Governance frameworks, Data Strategies, and the implementation of complex data science and AI projects and transformations. </p>
              <a
                href="#about"
                className="read-more-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                Learn more →
              </a>

            </section>
            <section className="content-section">
              <h2>As an International Speaker</h2>
              <p>
                Dr. Eva-Marie Muller-Stuler is a globally recognized voice in Data Science and AI. With over two decades of experience spanning NGOs, governments, and Fortune 500 companies, she is a sought-after speaker at prestigious platforms including the United Nations and UNESCO. 
              </p>
            </section>
            <div className="recognition">
            <h2>International recognitions</h2>
    
            <div className="grid-cell-abt">
              <div className="cell-img">
                <img src="/grid-img-1.webp" alt="Award" />
              </div>
              <div className="cell-content">
                <h4>30 Outstanding Women in Data, 2024</h4>
                <p>
                  Over the last 2 years, amazing women have consistently made this exclusive list, but every year, it keeps getting better!
                </p>
                <p>
                  From every corner of the globe, spanning across 16 countries and 6 continents, these 
                  <a className="x-el x-el-a" href="https://www.linkedin.com/feed/hashtag/?keywords=30outstandingwomenindata&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7199044488772653057" target="_blank" rel="noopener">
                    30 Outstanding Women in Data
                  </a> are leading the charge in Data.
                </p>
                <p>
                  <a className="x-el x-el-a" href="https://dataleum.com/women-in-data/#flipbook-df_6471/11/" target="_blank">
                    https://dataleum.com/women-in-data/#flipbook-df_6471/11/
                  </a>
                </p>
              </div>
            </div>
    
            <div className="grid-cell-abt">
              <div className="cell-content">
                <h4>List of 100 brilliant and inspiring women recognized in the 2022 list.</h4>
                <p>
                  List of 100 brilliant and inspiring women recognized in the 2022 list.
                </p>
              </div>
              <div className="cell-img">
                <img src="/grid-img-2.webp" alt="Award" />
              </div>
            </div>
    
            <div className="grid-cell-abt">
              <div className="cell-img">
                <img src="/grid-img-3.webp" alt="Award" />
              </div>
              <div className="cell-content">
                <h4>The 10 Most Influential Women in Technology</h4>
              </div>
            </div>
    
            <div className="grid-cell-abt">
              <div className="cell-content">
                <h4>Voted one of the best data scientists in the world 2019</h4>
                <p>
                  The machine learning industry has grown enormously since its inception in the first half of the 20th century. Data scientists have been responsible for the growth of machine learning. Some have contributed groundbreaking research of neural networks and deep learning, and others have built industry-leading applications of machine learning. Here are a number of data scientists that have contributed both to machine learning research and to applications as leaders in the industry. Many have built unimaginable innovations and leave their innovations for the millions of AI applications used today.
                </p>
              </div>
              <div className="cell-img">
                <img src="/grid-img-4.webp" alt="Award" />
              </div>
            </div>
    
            <div className="grid-cell-abt">
              <div className="cell-img">
                <img src="/grid-img-5.webp" alt="Award" />
              </div>
              <div className="cell-content">
                <h4>The Open Group: Level 3 - Distinguished Data Scientist</h4>
                <p>
                  <strong>Professional Certification: Level 3 - Distinguished Data Scientist</strong>
                  Distinguished Data Scientists work with business leaders to solve problems by understanding, preparing, and analyzing data to predict emerging trends and to provide recommendations to optimize business results. They typically have academic training in a quantitative discipline such as statistics, operations research, machine learning, or econometrics, and combine use of data, analytics tools, and languages with strong communication, visualization, and storytelling skills.
                </p>
              </div>
            </div>
          </div>
          </>
          
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
        case 'contact':
          return <Contact handleNavClick={handleNavClick} />;
        

      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <Navbar activeLink={activeLink} handleNavClick={handleNavClick} />
      {renderContent()}
      
      {activeLink !== 'contact' && (
        <button
          className="sticky-cta"
          onClick={() => {
            handleNavClick('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Let’s Consult
        </button>
      )}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links">
            {['home', 'about', 'videos', 'publications', 'podcasts', 'events', 'contact'].map((tab) => (
              <button
                key={tab}
                className="footer-link"
                onClick={() => {
                  handleNavClick(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>



          <div className="footer-address">
            <p>Dr. Eva</p>
            <p>123 Health Street, Suite 456</p>
            <p>New York, NY 10001</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
