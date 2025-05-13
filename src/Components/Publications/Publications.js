import React from 'react';
import './Publications.css';

const Link = ({ href, children }) => (
  <button className="link-button" onClick={() => window.open(href, '_blank')}>
    {children}
  </button>
);

const Publications = () => {
  return (
    <div className="container">
      <div className="publications">
        <h1>Publications</h1>
        <hr />
      </div>

      <div className="yr-2023">
        <h3>2023</h3>

        <div className="grid-ct">
          <div className="grid-cell">
            <img alt="Publication cover" src="/publications/2023-01.webp" />
            <div className="grid-cell-content">
              <h5>Mastering Generative AI: Systematic Approach to Evaluate Risks Using AI</h5>
              <p>Nov 2023</p>
            </div>
          </div>

          <div className="grid-cell">
            <img alt="Publication cover" src="/publications/2023-01.webp" />
            <div className="grid-cell-content">
              <h5>Mastering Generative AI: Systematic Approach to Evaluate Risks Using AI</h5>
              <p>Nov 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="yr-2022">
        <h3>2022</h3>

        <div className="grid">
          <div className="grid-ls">
            <img className="tt" alt="Publication cover" src="/publications/2022-01.webp" />
            <div className="grid-flex-content">
              <h5>Neue Dimensionen in Data Science</h5>
              <p>2022</p>
            </div>
            <div className="grid-ls-p">
              <p>Interdisziplinäre Ansätze und Anwendungen aus Wissenschaft und Wirtschaft</p>
              <p>Chapter 4: Die Notwendigkeit von Ethik für erfolgreiche künstliche Intelligenz</p>
              <Link href="https://www.vde-verlag.de/buecher/537721/neue-dimensionen-in-data-science.html">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img className="tt" alt="Publication cover" src="/publications/2022-02.webp" />
            <div className="grid-flex-content">
              <h5>The European Economy in a New World Order</h5>
              <p>Nov 2022</p>
            </div>
            <div className="grid-ls-p">
              <p>Contribution to research</p>
              <Link href="https://www.linkedin.com/pulse/futures-european-economy-jan-berger">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img className="tt" alt="Publication cover" src="/publications/2022-03.webp" />
            <div className="grid-flex-content">
              <h5>Gulf Business</h5>
              <p>Nov 2022</p>
            </div>
            <div className="grid-ls-p">
              <p>Here’s how artificial intelligence can enhance the metaverse</p>
              <Link href="https://gulfbusiness.com/how-ai-can-enhance-the-metaverse/">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img className="tt" alt="Publication cover" src="/publications/2022-04.webp" />
            <div className="grid-flex-content">
              <h5>Five ways MENA companies can improve trust in AI</h5>
              <p>May 2022</p>
            </div>
            <div className="grid-ls-p">
              <p>MENA companies must recognize the benefits of AI in shaping their businesses and keeping up with the world evolving around them.</p>
              <Link href="https://www.ey.com/en_kw/ai/five-ways-mena-companies-can-improve-trust-in-ai">View Publication</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="yr-2022">
        <h3>2021 and before</h3>

        <div className="grid-1">
          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-01.webp" />
            <div className="grid-flex-content">
              <h5>The Innovator</h5>
              <p>Nov 2021</p>
            </div>
            <div className="grid-ls-p">
              <p>Interview Of The Week: Eva-Marie Muller-Stuler, IBM Academy</p>
              <Link href="https://theinnovator.news/eva-marie-muller-stuler/">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-02.webp" />
            <div className="grid-flex-content">
              <h5>Analytics Insight</h5>
              <p>Apr 2021</p>
            </div>
            <div className="grid-ls-p">
              <p>Driving digital transformation across enterprise through disruptive innovation</p>
              <Link href="https://www.analyticsinsight.net/dr-eva-marie-muller-stuler-driving-digital-transformation-across-enterprise-through-disruptive-innovation/">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-03.webp" />
            <div className="grid-flex-content">
              <h5>Management and Business Research</h5>
              <p>Apr 2021</p>
            </div>
            <div className="grid-ls-p">
              <p>Interview: Working in Data Science</p>
              <Link href="https://www.amazon.com/Management-Business-Research-Mark-Easterby-Smith/dp/1529734517">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-04.webp" />
            <div className="grid-flex-content">
              <h5>The art of strategy in a time of Covid-19: A war without a plan</h5>
              <p>Apr 2020</p>
            </div>
            <div className="grid-ls-p">
              <p>The Importance of Data Governance to win against Covid</p>
              <Link href="https://medium.com/@eva.000/the-art-of-strategy-in-a-time-of-covid-19-a-war-without-a-plan-71f43263c7e2">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-05.webp" />
            <div className="grid-flex-content">
              <h5>How good are the Corona Virus prediction models?</h5>
              <p>Jan 2020</p>
            </div>
            <div className="grid-ls-p">
              <p>Currently we see more and more models predicting the future of contamination with the Corona Virus but are the models really as good as they claim to be and is it time to panic?</p>
              <Link href="https://medium.com/@eva.000/how-good-are-the-corona-virus-prediction-models-59a01699e0ea">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-06.webp" />
            <div className="grid-flex-content">
              <h5>Proven concepts for scaling AI</h5>
              <p>Jan 2020</p>
            </div>
            <div className="grid-ls-p">
              <p>Data Engineering, Scaling AI, MLOps: From experimentation to engineering discipline. Co-Authors: Beth Rudden, Wouter Oosterbosch</p>
              <Link href="https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/scaling-ai">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-07.webp" />
            <div className="grid-flex-content">
              <h5>16th International Conference on Information Technology-New Generations</h5>
              <p>May 2019</p>
            </div>
            <div className="grid-ls-p">
              <p>Analyzing D-Wave Quantum Macro Assembler Security (Quantum Computing, Security) Co-Authors: Hesham H. Alsaadi, Monther Aldwairi Springer International</p>
              <Link href="https://link.springer.com/chapter/10ystic">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" src="/publications/2021-08.webp" />
            <div className="grid-flex-content">
              <h5>Working in Data Science</h5>
              <p>Jan 2018</p>
            </div>
            <div className="grid-ls-p">
              <p>Interview in Management & Business Research about the work as a Data Scientist</p>
              <Link href="https://www.amazon.com/Management-Business-Research-Jaspersen-Easterby-Smith-dp-1526446952/dp/1526446952">View Publication</Link>
            </div>
          </div>

          <div className="grid-ls">
            <img alt="Publication cover" className="interview" src="/publications/2021-09.webp" />
            <div className="grid-flex-content">
              <h5>Interview – Using Decision Science to forecast customer behaviour</h5>
              <p>Dec 2016</p>
            </div>
            <div className="grid-ls-p">
              <p>Interview with Dr. Eva-Marie Müller-Stüler Chief Data Scientist at KPMG about how to use Decision Science to forecast customer behaviour</p>
              <Link href="https://data-science-blog.com/blog/2016/12/12/interview-using-decision-science-to-forecast-customer-behaviour/">View Publication</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="books">
        <h3>Book</h3>
        <hr />
        <img alt="Book cover" src="https://img1.wsimg.com/isteam/ip/b30c73e4-0318-477a-b739-34ed592323d4/AIinBloodBook.jpg/:/cr=t:3.47%25,l:0%25,w:100%25,h:93.07%25" />
        <p>With Medical ultrasound, it was only possible to measure the speed of blood, which only allowed semiquatitative conclusions on the actual blood flow in human bodies.</p>
        <p>This book shows new groundbreaking methods to measure the total intensity of blood flow and get better insights into the flow profile and far more precise and better quantitative assessments of the actual medical condition of a patient.</p>
        <div className='bk-link'>
          <Link href="https://www.amazon.de/Mathematische-Dopplersignals-quantitativen-Blutflusses-Medizinischen/dp/3844007164">View Book</Link>
        </div>
      </div>

      <div className="pub">
        <h3>Other Publications</h3>
        <p>Scientific and research publication are not listed. Please get in touch if needed.</p>
      </div>
    </div>
  );
};

export default Publications;