import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./Videos.css";

const comedyVideos = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  "https://www.youtube.com/watch?v=9bZkp7q19f0",
  "https://www.youtube.com/watch?v=K4TOrB7at0Y",
  "https://www.youtube.com/watch?v=5qap5aO4i9A",
];

const romanceVideos = [
  "https://www.youtube.com/watch?v=YQHsXMglC9A",
  "https://www.youtube.com/watch?v=oyEuk8j8imI",
  "https://www.youtube.com/watch?v=OpQFFLBMEPI",
  "https://www.youtube.com/watch?v=3YxaaGgTQYM",
  "https://www.youtube.com/watch?v=lp-EO5I60KA",
  "https://www.youtube.com/watch?v=8xg3vE8Ie_E",
];

const Videos = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const comedyRef = useRef(null);
  const romanceRef = useRef(null);

  // Scroll functions
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      {/* Comedy Section */}
      <div className="video-section">
        <h2 className="section-title">Comedy</h2>
        <button
          className="scroll-button left"
          onClick={() => scrollLeft(comedyRef)}
        >
          &#8249;
        </button>
        <div className="video-gallery-container">
          <div className="video-gallery" ref={comedyRef}>
            {comedyVideos.map((url, index) => (
              <div
                key={index}
                className="video-container"
                onMouseEnter={() => setPlayingIndex(index)}
                onMouseLeave={() => setPlayingIndex(null)}
              >
                <ReactPlayer
                  url={url}
                  width="100%"
                  height="100%"
                  playing={playingIndex === index}
                  muted
                  loop
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="scroll-button right"
          onClick={() => scrollRight(comedyRef)}
        >
          &#8250;
        </button>
      </div>

      {/* Romance Section */}
      <div className="video-section">
        <h2 className="section-title">Romance</h2>
        <button
          className="scroll-button left"
          onClick={() => scrollLeft(romanceRef)}
        >
          &#8249;
        </button>
        <div className="video-gallery-container">
          <div className="video-gallery" ref={romanceRef}>
            {romanceVideos.map((url, index) => (
              <div
                key={index}
                className="video-container"
                onMouseEnter={() => setPlayingIndex(index)}
                onMouseLeave={() => setPlayingIndex(null)}
              >
                <ReactPlayer
                  url={url}
                  width="100%"
                  height="100%"
                  playing={playingIndex === index}
                  muted
                  loop
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="scroll-button right"
          onClick={() => scrollRight(romanceRef)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Videos;
