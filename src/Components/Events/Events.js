import React from "react";
import "./Events.css"; // Import CSS for styling

const eventData = [
  {
    year: "2023",
    events: [
      {
        title: "IEEE - Introduction to AI Systems and Ethics",
        URL: "https://standards.ieee.org/news/get-program-ai-ethics/",
        image: "/Events/IEEESATraining_Presentation.jpeg",
        date: "Sep 2023",
        description: [
          "Key ethical considerations in AI development and deployment.",
          "The impact of AI on various industries and value for AI to be ethics-based.",
          "Best practices and examples for ethical AI design, AI implementation, and AI certification.",
          "What does the future hold?",
        ],
        location: "Global, Online",
      },
      {
        title: "ChatGPT and the Risk of AI for Cyber Security",
        date: "Jul 2023",
        image: "/Events/ChatGpt.png",
        description: [
          "What has changed with the increase in GenAI?",
          "What will the future look like?",
          "What is the impact on businesses and society?",
        ],
        location: "KSA, NEOM",
      },
      {
        title: "DEWA Innovation Summit",
        date: "Apr 2023",
        image: "/Events/20230428_Dewa_BanAI.jpeg",
        description: [
          "The impact of AI on our future - Shall we ban or expedite it?",
          "What is the risk? How do we ensure AI is secured and doesn't do harm?",
        ],
        location: "UAE, Dubai",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        title: "Athens Round Table Brussels",
        date: "Dec 2022",
        description: [
          "EU AI Act: What will it look like and what will it mean to organizations?",
        ],
        location: "Belgium, Brussels",
      },
      {
        title: "Middle East Enterprise AI and Analytics Summit",
        date: "Oct 2022",
        description: [
          "Enabling technologies leading strategic digital transformation within an enterprise.",
        ],
        location: "UAE, Dubai",
      },
      {
        title: "Dubai Future Forum",
        date: "Oct 2022",
        description: [
          "The world's largest gathering of Futurists. Is Digital Poverty the new global Crisis? The more data you produce, the bigger will be your influence on the future.",
        ],
        location: "UAE, Dubai",
      },
      {
        title: "Global AI Summit",
        date: "Sep 2022",
        description: [
          "AI through the lens of Equality, Accessibility and Transparency",
        ],
        location: "KSA, Riyadh",
      },
      {
        title: "2nd Middle East Data Analytics Forum",
        date: "Jun 2022",
        description: [
          "Getting results! - Building scalable and Trusted Data & AI solutions with impact",
        ],
        location: "",
      },
      {
        title: "Women in Data Science 2022 - Dubai, UAE",
        date: "Jun 2022",
        description: [
          "Ambassador and Keynote speaker",
          "Trusted AI - Why? What? and How?",
        ],
        location: "UAE, Dubai",
      },
      {
        title: "Women in Data Science 2022 - Dubai, Germany",
        date: "Apr 2022",
        description: ["Responsible AI -  what does this really mean?"],
        location: "UAE, Dubai",
      },
      {
        title: "Fulbright Speaker Series - Texas, USA",
        date: "Apr 2022",
        description: [
          "The future impact on economy and employment of Data & AI",
        ],
        location: "UAE, Dubai",
      },
      {
        title: "Data Bahrain",
        // URL:"https://www.ec-mea.com/2nd-international-conference-of-data-future-of-everything-successfully-held-on-30th-march/",
        date: "Mar 2022",
        description: ["Data 'Future of everything' "],
        location: "UAE, Dubai",
      },
    ],
  },
];

const Events = ({handleNavClick = () => {}}) => {
  return (
    <div className="events-container">
      <h1 className="page-title">Public Speaking / Conferences / Events</h1>

      {eventData.map((yearData, index) => (
        <div key={index} className="year-section">
          <h2 className="year-title">{yearData.year}</h2>
          {yearData.events.map((event, i) => (
            <div key={i} className="event-card">
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <ul className="event-description">
                  {event.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
                <p className="event-location">{event.location}</p>
              </div>
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            </div>
          ))}
        </div>
      ))}
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
    </div>
  );
};

export default Events;
