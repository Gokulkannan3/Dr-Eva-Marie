import React, { useRef } from "react";
import "./Videos.css";

const comedyVideos = [
  {
    url: "https://www.youtube.com/embed/BZkraBBcuJ4",
    title: "How to put Scaleable and Trustworthy AI together"
  },
  {
    url: "https://www.youtube.com/embed/jj28mO-3pcw",
    title: "How to build Trustworthy AI"
  },
  {
    url: "https://www.youtube.com/embed/P34kfyBDklM",
    title: "How to scale AI"
  },
  {
    url: "https://www.youtube.com/embed/O3lzjpqlApQ",
    title: "AI Ethics and why shall I care?"
  },
  {
    url: "https://www.youtube.com/embed/rbkMpblErFw",
    title: "What is a data scientist? And where do I start?"
  }
];

const romanceVideos = [
  {
    url: "https://www.youtube.com/embed/RWPipuFWLRE",
    title: "Gobal AI Summit"
  },
  {
    url: "https://www.youtube.com/embed/sMbNKRyFAMY",
    title: "World Data Forum"
  },
  {
    url: "https://www.youtube.com/embed/4mS7DzL0u1s",
    title: "Artificial Intelligence could create 58 Million jobs by 2022"
  },
  {
    url: "https://www.youtube.com/embed/lG8RQdMIK9U",
    title: "Innovation and Data Science for Governments"
  },
  {
    url: "https://www.youtube.com/embed/FdPmLKJN1qQ",
    title: "WiDS AbuDhabi and Dubai 2020 Keynote"
  },
  {
    url: "https://www.youtube.com/embed/LzxMvizFwrQ",
    title: "Women's Majlis | Women in Tech | October 21, 2020"
  },
  {
    url: "https://www.youtube.com/embed/IDJpuTsxysI",
    title: "Girls and Women Talking Tech Interview 35 - Dr. Eva-Marie Muller-Stuler and Habiba Aziz"
  },
  {
    url: "https://www.youtube.com/embed/_XBVzOYu2EI",
    title: "Keynote: Fighting Bias and building trust in AI at MKAI"
  },
  {
    url: "https://www.youtube.com/embed/PogKvqxBXu8",
    title: "The Power of Ethical AI"
  }
];

const scrollByAmount = 300;

const Videos = () => {
  const comedyRef = useRef(null);
  const romanceRef = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  const renderVideoSection = (title, videos, ref) => (
    <div className="video-section">
      <h2 className="section-title">{title}</h2>
      <div className="video-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scrollLeft(ref)}>
          &#8249;
        </button>
        <div className="video-gallery-container" ref={ref}>
          <div className="video-gallery">
            {videos.map((video, index) => (
              <div key={index} className="video-item">
                <div className="video-container">
                  <iframe
                    className="iframe"
                    src={video.url}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(ref)}>
          &#8250;
        </button>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      {renderVideoSection("Videos", comedyVideos, comedyRef)}
      {renderVideoSection("Conferences", romanceVideos, romanceRef)}
    </div>
  );
};

export default Videos;