import React, { useState, useEffect } from 'react';
import './Home.css';
import About from '../About/About';
import Videos from '../Videos/Videos';
import Publications from '../Publications/Publications';
import Podcasts from '../Podcasts/Podcasts';
import Events from '../Events/Events';
import Contact from '../Contact/Contact';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsTwitterX }from 'react-icons/bs'

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

  const [emailHref, setEmailHref] = useState("mailto:info@dreva.ai");

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      // On desktop, use Gmail web link
      setEmailHref("https://mail.google.com/mail/?view=cm&to=info@dreva.ai");
    }
  }, []);

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
              <h1>Dr. Eva-Marie Muller-Stuler: Architecting Trusted AI</h1>
              <p>
                Internationally acclaimed AI pioneer and ethical strategist, guiding organizations and society towards impactful, scalable, and responsible artificial intelligence.
              </p>
              <p>
                Pioneering AI & Data Science: Discover the journey of a leader who shaped early data science practices and continues to push the boundaries of AI innovation.
              </p>
              <p>
                Championing Ethical & Responsible AI: Explore Dr. Muller-Stuler's influential work in developing frameworks and advocating for AI that benefits humanity.
              </p>
              <p>
                Globally Recognized & Awarded Expertise: Learn about the prestigious accolades, including "World’s Best Data Scientist," that validate her unparalleled contributions to the field.
              </p>
              <p>
                Bridging Theory and Practice: Understand how Dr. Muller-Stuler uniquely translates deep academic knowledge (PhD) into practical, scalable solutions for real-world challenges.
              </p>
              <p>
                Advocating for Diversity in Tech: Join the mission to foster equality and empower the next generation of leaders, particularly women, in science and technology.
              </p>
            </div>
          </section>
          <div className='marquee'>
            <div className='marquee-div'>
              <div className='marquee-content'>
                <h3 className='marquee-text'>
                    Trust - Accuracy - Robustness - Security - Transparency - Accountability - Explainability - Fairness
                    <span className='gap'></span>
                    Trust - Accuracy - Robustness - Security - Transparency - Accountability - Explainability - Fairness
                    <span className='gap'></span>
                    Trust - Accuracy - Robustness - Security - Transparency - Accountability - Explainability - Fairness
                    <span className='gap'></span>
                    Trust - Accuracy - Robustness - Security - Transparency - Accountability - Explainability - Fairness
                    <span className='gap'></span>
                    Trust - Accuracy - Robustness - Security - Transparency - Accountability - Explainability - Fairness
                </h3>
              </div>
            </div>
          </div>
          <section className="speaker-about content-section" id="speaker-about">
              <h2>About Me</h2>
              <p>
              Dr. Eva-Marie Muller-Stuler is leading the Data & AI practice for Ernst & Young for the Middle East and North Africa. She is responsible for the development of Data Governance frameworks, Data Strategies, and the implementation of complex data science and AI projects and transformations. </p>
              <a
                href="#about"
                className="read-more-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about'); // React Router's `useNavigate` hook
                  window.scrollTo(0, 0); // Scroll to top
                }}
              >
                Learn more →
              </a>
            </section>
            <section className="content-section">
              <h2>Brief Introduction</h2>
              <p>
                Dr. Eva-Marie Muller-Stuler stands at the forefront of the global AI revolution. As the Data & AI practice leader for EY MENA and former CTO for AI at IBM MEA, she possesses a rare combination of deep technical expertise and strategic foresight. For over two decades, Dr. Muller-Stuler has been instrumental in developing groundbreaking data science methodologies and leading complex AI transformations for Fortune 500 companies, governments, and NGOs worldwide. Her unwavering commitment, established long before it became mainstream, lies in ensuring that AI development is not only innovative but fundamentally ethical and responsible, driving positive change while mitigating potential risks.
              </p>
            </section>
            <div className="recognition">
            <h2>International recognition</h2>
            <div className='grid-abth'>
              <div className="grid-cell-abth">
                <div className="cell-content">
                  <h4>30 Outstanding Women in Data, 2024</h4>
                  <p>
                    Over the last 2 years, amazing women have consistently made this exclusive list, but every year, it keeps getting better!
                  </p>
                </div>
              </div>
      
              <div className="grid-cell-abth">
                <div className="cell-content">
                  <h4>List of 100 brilliant and inspiring women recognized in the 2022 list.</h4>
                  <p>
                    List of 100 brilliant and inspiring women recognized in the 2022 list.
                  </p>
                </div>
              </div>
      
              <div className="grid-cell-abth">
                <div className="cell-content">
                  <h4>The 10 Most Influential Women in Technology</h4>
                </div>
              </div>
      
              <div className="grid-cell-abth">
                <div className="cell-content">
                  <h4>Voted one of the best data scientists in the world 2019</h4>
                  <p>
                    The machine learning industry has grown enormously since its inception in the first half of the 20th century.
                  </p>
                </div>
              </div>
            </div>    
            <div className="grid-cell-abth">
              <div className="cell-content">
                <h4>The Open Group: Level 3 - Distinguished Data Scientist</h4>
                <p>
                  Professional Certification: Level 3 - Distinguished Data Scientist
                </p>
              </div>
            </div>

            <div className='social-media-home'>
              <h4 className='ttt'>Follow us on social media for more updates</h4>
              <div className='buttons'>
                <a
                  href="https://www.linkedin.com/in/dreva"
                  className="social-button linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className='btn-icon' size={30} />
                </a>
                <a
                  href="https://www.youtube.com/@DrEvaMS"
                  className="social-button youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className='btn-icon' size={30} />
                </a>
                <a
                  href="https://x.com/evamustu?lang=en"
                  className="social-button youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX className='btn-icon' size={24} />
                </a>
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

          {activeLink === 'contact' && (
            <div className="footer-address">
              <h4>Connect Dr. Eva, a Trusted AI Expert</h4>
              <a
                href={emailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mailto"
              >
                info@dreva.ai
              </a>
            </div>
          )}
          </div>
      </footer>
    </div>
  );
}

export default Home;
