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
            <img className='potrait-i' src="/ph1.png" alt="Portrait of Dr. Eva-Marie Muller-Stuler" />
          </div>
          <div className="about-hero">
            <h4>Bio</h4>
            <p>
              Dr. Eva-Marie Müller-Stüler stands among the world’s foremost leaders in artificial intelligence (AI) and data science, renowned for her groundbreaking contributions that have shaped the foundation of modern AI. With a career spanning over two decades, she has consistently driven innovation through seminal concepts such as the Center of Excellence (COE), data ecosystems, and proprietary algorithms—advancements that remain pivotal to global AI frameworks today.            </p>
            <p>
              Currently leading the Data & AI practice for Ernst & Young (EY) in the Middle East and North Africa (MENA), Dr. Müller-Stüler spearheads the development of transformative data strategies, governance frameworks, and cutting-edge AI solutions for Fortune 500 companies, governments, and NGOs. By integrating AgenticAI (autonomous, goal-driven AI systems) and Generative AI (GenAI) into enterprise operations, she is revolutionizing how organizations optimize workflows, enhance decision-making, and reimagine customer experiences. Her prior role as CTO for Artificial Intelligence and Chief Data Scientist at IBM (Middle East & Africa) further solidified her reputation as a trailblazer in deploying scalable, ethical AI systems.            </p>
            <p>
              A mathematician by training, Dr. Müller-Stüler began her career revolutionizing European business performance through first-of-their-kind data models and restructuring methodologies. At KPMG London, she led one of Europe’s earliest data science teams, creating groundbreaking techniques that redefined how industries harness data for economic and societal impact. By 2013, her foresight into AI’s ethical implications catalyzed her leadership in co-developing global Ethical AI policies with institutions like the United Nations and UNESCO—establishing frameworks that balance innovation with accountability.
            </p>
            <p className='global'>
              <p>A Legacy of Firsts and Global Recognition</p>
                <ul>
                  <li>World’s Best Data Scientist (2020), Top 10 Most Influential Women in Technology (2021), Top 100 Brilliant Women in AI Ethics (2022), and 30 Outstanding Women in Data (2024).</li>
                  <li>Architect of data ecosystems and COE models that standardize AI excellence across industries.</li>
                  <li>Pioneer in operationalizing AgenticAI and GenAI to drive end-to-end digital transformation, from predictive analytics to autonomous process optimization.</li>
                  <li>Sought-after advisor to global entities and a keynote speaker at premier forums, including the UN, UNESCO, and leading tech conferences.</li>
                </ul>
            </p>
            <h4 className='heading-champ'>
              Champion of Inclusive Innovation
            </h4>
            <p className='para-champ'>
              Dr. Müller-Stüler is a tireless advocate for equality in STEM, founding organizations that empower women in tech and mentoring through initiatives like Women in Data Science (WiDS). Her philosophy—“Diversity and inclusion forge workplaces rooted in trust, intellectual growth, and excellence”—drives her mission to create equitable opportunities worldwide.
            </p>
            <p className='combine'>
              “Combining passion for AI with expertise and diverse teams isn’t just transformative—it’s how we build a future that works for all. By embedding AgenticAI and GenAI into the core of business strategies, we’re not just solving problems—we’re redefining what’s possible.”
            </p>
            <p>
              A serial entrepreneur and investor in tech ventures, Dr. Müller-Stüler continues to bridge the gap between ethical AI ambition and real-world impact, transforming industries through intelligent systems that learn, adapt, and lead.
            </p>
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="recognition">
        <h2>International recognitions</h2>

        <div className="grid-cell-abt">
          <div className="cell-img">
            <img className='women-data' src="/grid-img-1.webp" alt="Award" />
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
          <div className="cell-img">
            <img src="/grid-img-2 .png" alt="Award" />
          </div>
          <div className="cell-content">
            <h4>List of 100 brilliant and inspiring women recognized in the 2022 list.</h4>
            <p>
              List of 100 brilliant and inspiring women recognized in the 2022 list.
            </p>
          </div>
        </div>

        <div className="grid-cell-abt">
          <div className="cell-img">
            <img className='award' src="/grid-img-3.webp" alt="Award" />
          </div>
          <div className="cell-content">
            <h4>The 10 Most Influential Women in Technology</h4>
          </div>
        </div>

        <div className="grid-cell-abt">
          <div className="cell-img">
            <img src="/grid-img-4.webp" alt="Award" />
          </div>
          <div className="cell-content">
            <h4>Voted one of the best data scientists in the world 2019</h4>
            <p>
              The machine learning industry has grown enormously since its inception in the first half of the 20th century. Data scientists have been responsible for the growth of machine learning. Some have contributed groundbreaking research of neural networks and deep learning, and others have built industry-leading applications of machine learning. Here are a number of data scientists that have contributed both to machine learning research and to applications as leaders in the industry. Many have built unimaginable innovations and leave their innovations for the millions of AI applications used today.
            </p>
          </div>
        </div>

        <div className="grid-cell-abt">
          <div className="cell-img">
            <img className='pro-grp' src="/grid-img-5.webp" alt="Award" />
          </div>
          <div className="cell-content">
            <h4>The Open Group: Level 3 - Distinguished Data Scientist</h4>
            <p>
                <h4>Professional Certification: Level 3 - Distinguished Data Scientist</h4>
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
