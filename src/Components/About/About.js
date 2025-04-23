import React, { useState } from 'react'; // Make sure to import useState
import './About.css';

const About = ({handleNavClick = () => {}}) => {
  const [showFullBio, setShowFullBio] = useState(false); // Correct placement of useState

  const handleToggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>Dr. Eva-Marie Muller-Stuler</h2>
        <div className="bio">
          <div className="hero-image">
            <img src="/ph1.png" alt="Portrait of Dr. Eva-Marie Muller-Stuler" />
          </div>
          <div className="about-hero">
            <h4>Bio</h4>
            <p style={{ margin: 0 }}>
              Dr. Eva-Marie Muller-Stuler is leading the Data & AI practice for Ernst & Young for the Middle East and North Africa. She is responsible for the development of Data Governance frameworks, Data Strategies, and the implementation of complex data science and AI projects and transformations.
            </p>
            <p style={{ margin: 0 }}>
              Previously, Dr. Muller-Stuler was CTO for Artificial Intelligence and Chief Data Scientist for the Middle East and Africa at IBM.
            </p>
            <p style={{ margin: 0 }}>
              After studying mathematics and dissertation, Dr. Eva-Marie Muller-Stuler started her career in advising European companies on restructuring and performance optimization. For this, she developed many first-of-a-kind data methods and models. At KPMG in London, she led one of the first data science teams in Europe to develop groundbreaking data driven methods and techniques.
            </p>
            <p style={{ margin: 0 }}>
              Since 2013, after seeing the impact of her work on industries and society, she spearheaded the development of Ethical and Responsible AI policies and framework with governmental and non-governmental organizations and highlighted the possibilities and impact of data science and AI on the economy, society, and individuals.
            </p>
            <p style={{ margin: 0 }}>
              For over 20 years, Dr. Muller-Stuler has worked for NGOs, governments, and F500 companies. She is a sought-after speaker at the United Nations, UNESCO, and many international conferences, as well as the founder and investor of several tech companies.
            </p>
            <p style={{ margin: 0 }}>
              Today, Dr. Eva-Marie Muller-Stuler is one of the world's most respected data science thought leaders and has received numerous awards, including "World’s Best Data Scientist" (2020), "The 10 most influential Women in Technology" (2021), "Top 100 Brilliant Women in AI Ethics" (2022), "30 Outstanding Women in Data" (2024).
            </p>
            <p style={{ margin: 0 }}>
              She is a strong advocate of equality in science and has founded and led several organizations that contribute to the advancement of women in the technology industry.
            </p>
          </div>
        </div>
      </div>

      {/* Recognition Section */}
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
      {/* <footer className="footer">
        <div className="footer-links">
          {['home', 'about', 'videos', 'publications', 'podcasts', 'events'].map((tab) => (
            <button key={tab} className="footer-link" onClick={() => handleNavClick(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="footer-address">
          <p>Dr. Eva</p>
          <p>123 Health Street, Suite 456</p>
          <p>New York, NY 10001</p>
        </div>
      </footer> */}
    </section>
  );
};

export default About;
