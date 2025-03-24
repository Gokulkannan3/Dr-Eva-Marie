import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      {/* <h2>About Dr. Eva-Marie Muller-Stuler</h2>
      <h3>Bio</h3> */}
      <h2>
        Dr. Eva-Marie Muller-Stuler
      </h2>
      <div class="bio">
        <div class="hero-image">
        <img src="/ph1.png" alt="Portrait of Dr. Eva-Marie Muller-Stuler" />
        </div>
        <div class="about-hero">
          <h4>Bio</h4>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Dr. Eva-Marie Muller-Stuler is leading the</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Data &amp; AI</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">practice</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">for Ernst &amp; Young for the Middle East and North Africa. She is responsible for the development</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">of Data</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Governance frameworks,</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Data Strategies</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">and</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">the</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">implementation of complex data science and AI projects and transformations.</em>&nbsp;</span></p>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Previously, Dr. Muller-Stuler was CTO</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">for</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Artificial Intelligence and Chief Data Scientist for the Middle East and Africa at IBM.</em></span></p>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">After studying mathematics and dissertation, Dr. Eva-Marie Muller-Stuler started her career in advising European companies on restructuring and performance optimization. For this, she developed many</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">first-of-a-kind</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">data</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">methods and models. At KPMG in London, she led one of the first data science teams in Europe to develop groundbreaking data</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">driven methods and techniques.</em>&nbsp;</span></p>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Since 2013, after seeing the impact of her work on industries and</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">society she</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">spearheaded the development of Ethical and</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Responsible AI policies and framework</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">with governmental and non-governmental organization</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">and highlighted</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">the possibilities and impact of data science and AI on the economy,</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">society</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">and individuals.</em></span></p>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">For over 20 years, Dr. Muller-Stuler has worked for NGOs, governments and</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">F500</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">companies. She is a sought-after speaker at the United Nations,</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">UNESCO</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">and many international conferences, as well as the founder and investor of several tech companies.</em></span></p>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Today, Dr. Eva-Marie Muller-Stuler is one of the world's most respected data science thought leaders and has received numerous awards, including "World’s</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Best Data Scientist" (2020), "The 10 most influential Women in Technology" (2021), "Top 100 Brilliant Women in AI Ethics" (2022), "</em>30 Oustanding Women in Data" (2024).</span></p>
          <p style={{ margin: 0 }}><span><br></br></span></p>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">She is a strong advocate of equality in science and has founded and led several organizations that contribute to the advancement of women in the technology industry.</em></span></p>
        </div>
      </div>
    </div>
    <div class="recognition">
      <h2>International recognitions</h2>
      <div class="grid-cell-abt">
        <div class="cell-img">
          <img src="/grid-img-1.webp" alt="Award" />
        </div>
        <div class="cell-content">
          <h4>30 Oustanding Women in Data, 2024</h4>
          <p>
            Over the last 2 years, amazing women have consistently made this exclusive list, but every year, it keeps getting better!
          </p>
          <p>
            From every corner of the globe, spanning across 16 countries and 6 continents, these            <a class="x-el x-el-a c1-1n c1-1o c1-8k c1-1q c1-1f c1-1r c1-1s c1-68 c1-b c1-94 c1-1z c1-95 c1-96" href="https://www.linkedin.com/feed/hashtag/?keywords=30outstandingwomenindata&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7199044488772653057" rel="noopener" target="_blank">&nbsp;30 Outstanding Women in Data</a>
            are leading the charge in Data.
          </p>
          <p>
            <a class="x-el x-el-a c1-1n c1-1o c1-8k c1-1q c1-1f c1-1r c1-1s c1-68 c1-b c1-94 c1-1z c1-95 c1-96" href="https://dataleum.com/women-in-data/#flipbook-df_6471/11/" target="_blank">https://dataleum.com/women-in-data/#flipbook-df_6471/11/</a>
          </p>
        </div>
      </div>

      <div class="grid-cell-abt">
        <div class="cell-content">
          <h4>List of 100 brilliant and inspiring women recognized in the 2022 list.</h4>
          <p>
            List of 100 brilliant and inspiring women recognized in the 2022 list.
          </p>
        </div>
        <div class="cell-img">
          <img src="/grid-img-2.webp" alt="Award" />
        </div>
      </div>

      <div class="grid-cell-abt">
        <div class="cell-img">
          <img src="/grid-img-3.webp" alt="Award" />
        </div>
        <div class="cell-content">
          <h4>The 10 Most Influential Women in Technology
          </h4>
        </div>
      </div>

      <div class="grid-cell-abt">
        <div class="cell-content">
          <h4>Voted one of the best data scientist in the world 2019
          </h4>

          <p>
            The machine learning industry has grown enormously since its inception in the first half of the 20th century. Data scientists have been responsible for the growth of machine learning. Some have contributed groundbreaking research of neural networks and deep learning, and others have built industry leading applications of machine learning. Here are a number of data scientists that have contributed both to machine learning research and to applications as leaders in the industry. Many have built unimaginable innovations and leave their innovations for the millions of AI applications used today. Here is our list of the best data scientists throughout the world, leading the field of AI which is changing and evolving every day.
          </p>
        </div>
        <div class="cell-img">
          <img src="/grid-img-4.webp" alt="Award" />
        </div>
      </div>


      <div class="grid-cell-abt">

        <div class="cell-img">
          <img src="/grid-img-5.webp" alt="Award" />
        </div>
        <div class="cell-content">
          <h4>The Open Group: Level 3 - Distinguished Data Scientist
          </h4>

          <p>
            <strong>            Professional Certification: Level 3 - Distinguished Data Scientist
            </strong>

            Distinguished Data Scientists work with business leaders to solve problems by understanding, preparing, and analyzing data to predict emerging trends and to provide recommendations to optimize business results. They typically have academic training in a quantitative discipline such as statistics, operations research, machine learning, or econometrics, and combine use of data, analytics tools and languages with strong communication, visualization, and storytelling skills.
          </p>
        </div>

      </div>
    </div>


  </section>



);

export default About;


