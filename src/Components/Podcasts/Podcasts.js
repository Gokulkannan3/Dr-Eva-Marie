import React from 'react';
import './Podcasts.css';

// Updated podcast data with more relevant content and images
const podcastData = [
  {
    id: 1,
    title: "Ethical AI Development and Governance",
    description: "Exploring the frameworks and principles needed to ensure AI systems are developed responsibly.",
    image: "/podcastimg/podcast1.jpeg",
  },
  {
    id: 2,
    title: "Hyperwomen - Is AI sexist?",
    description: "In 2018 Amazon terminated its trial artificial intelligence (AI) recruiting tool after discovering it discriminated against women...",
    image: "/podcastimg/podcast2.jpeg",
  },
  {
    id: 3,
    title: "AI and the Future of Technology",
    description: "An exploration of how AI is reshaping the technology landscape and the ethical considerations that come with this technological revolution.",
    image: "/podcastimg/podcast3.jpeg",
  },
  {
    id: 4,
    title: "Out of the Comfort Zone",
    description: "Join Wanda Wallace as she explores leadership challenges, career growth, and pushing boundaries in this thought-provoking podcast series about stepping outside your comfort zone.",
    image: "/podcastimg/podcast4.jpeg",
  },
  {
    id: 5,
    title: "335- Uncovering the Myth of AI with IBM Data Scientist Dr. Eva Marie",
    description: "Explore the myths and realities of AI with insights from IBM's Dr. Eva Marie, diving into the impact and future of AI technology.",
    image: "/podcastimg/podcast5.jpeg",
  },
];

const PodcastTiles = () => {
  const handleListenClick = (title) => {
    if (title === "Ethical AI Development and Governance") {
      window.open('https://thehypewomen.com/dr-eva-marie-muller-stuler-is-ai-sexist', '_blank');
    } else if (title === "Hyperwomen - Is AI sexist?") {
      window.open('https://open.spotify.com/episode/3B5weMKUIPclpNcE9yK2Ei?si=-QOIRaoxSWK0uWeMRsj4oQ&nd=1&dlsi=e17011adb37346c#login', '_blank');
    } else if (title === "AI and the Future of Technology") {
      window.open('https://open.spotify.com/episode/0tJTE2LeC6u8DaRPekhbxS?si=moc4R82eSWevhxJ7DRaIxg', '_blank');
    } else if (title === "Out of the Comfort Zone") {
      window.open('https://open.spotify.com/episode/7dXwp6O8018ORWz9Az7t4s?si=oXQkrs_eQh-SRreAQOZ2zQ', '_blank');
    } else if (title === "335- Uncovering the Myth of AI with IBM Data Scientist Dr. Eva Marie") {
      window.open('https://soundcloud.com/futuretalk95/335-uncovering-the-myth-of-ai-with-ibm-data-scientist-dr-eva-marie-090220', '_blank');
    }
  };

  return (
    <div className="podcast-section">
      <div className="podcast-tiles">
        {podcastData.map((podcast) => (
          <div key={podcast.id} className="podcast-card">
            <div className="podcast-image">
              <img src={podcast.image} alt={podcast.title} />
            </div>
            <div className="podcast-content">
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
              <button
                className="listen-now"
                onClick={() => handleListenClick(podcast.title)}
              >
                Listen Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastTiles;