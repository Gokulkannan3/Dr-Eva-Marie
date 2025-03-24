import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./Videos.css";

const comedyVideos = [
  " https://www.youtube.com/watch?v=BZkraBBcuJ4",

  "https://www.youtube.com/watch?v=jj28mO-3pcw",

  "https://www.youtube.com/watch?v=P34kfyBDklM",

  "https://www.youtube.com/watch?v=O3lzjpqlApQ",

  "https://www.youtube.com/watch?v=rbkMpblErFw",
];

const romanceVideos = [
  "https://www.youtube.com/watch?v=RWPipuFWLRE",
  "https://www.youtube.com/watch?v=sMbNKRyFAMY",

  "https://www.youtube.com/watch?v=4mS7DzL0u1s",

  "https://www.youtube.com/watch?v=lG8RQdMIK9U",

  "https://www.youtube.com/watch?v=FdPmLKJN1qQ",

  "https://www.youtube.com/watch?v=LzxMvizFwrQ",

  "https://www.youtube.com/watch?v=IDJpuTsxysI",

  "https://www.youtube.com/watch?v=_XBVzOYu2EI",

  "https://www.youtube.com/watch?v=PogKvqxBXu8",
];

const scrollByAmount = 280 * 3 + 32; // 3 video widths + 2 gaps

const Videos = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
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

  const renderVideoSection = (title, videos, ref, offset) => (
    <div className="video-section">
      <h2 className="section-title">{title}</h2>
      <div className="video-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scrollLeft(ref)}>
          &#8249;
        </button>
        <div className="video-gallery-container" ref={ref}>
          <div className="video-gallery">
            {videos.map((url, index) => (
              <div
                key={index}
                className="video-container"
                onMouseEnter={() => setPlayingIndex(index + offset)}
                onMouseLeave={() => setPlayingIndex(null)}
              >
                <ReactPlayer
                  url={url}
                  width="100%"
                  height="100%"
                  playing={playingIndex === index + offset}
                  muted
                  loop
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="scroll-button right"
          onClick={() => scrollRight(ref)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      {renderVideoSection("Videos", comedyVideos, comedyRef, 0)}
      {renderVideoSection(
        "Conference",
        romanceVideos,
        romanceRef,
        comedyVideos.length
      )}
    </div>
  );
};

export default Videos;
