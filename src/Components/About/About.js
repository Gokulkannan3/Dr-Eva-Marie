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
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Today, Dr. Eva-Marie Muller-Stuler is one of the world's most respected data science thought leaders and has received numerous awards, including "Worlds</em> <em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">Best Data Scientist" (2020), "The 10 most influential Women in Technology" (2021), "Top 100 Brilliant Women in AI Ethics" (2022), "</em>30 Oustanding Women in Data" (2024).</span></p>
          <p style={{ margin: 0 }}><span><br></br></span></p>
          <p style={{ margin: 0 }}><span><em class="x-el x-el-span c1-1n c1-1o c1-b c1-8g c1-2y c1-1z c1-8h c1-8i">She is a strong advocate of equality in science and has founded and led several organizations that contribute to the advancement of women in the technology industry.</em></span></p>
        </div>
      </div>
    </div>
    <div class="recognition">
        <h2>International recognitions</h2>

        
    </div>

    
  </section>

  

);

export default About;


