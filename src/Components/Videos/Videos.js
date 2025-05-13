import React from "react";
import "./Videos.css";

const dataScienceVideos = [
  {
    url: "https://www.youtube.com/embed/BZkraBBcuJ4",
    title: "How to put Scaleable and Trustworthy AI together",
    description:
      "In my previous videos, I have spoken about scalable and impactful AI is not just about data and smart algorithms. There are 6 pillars that are necessary to be successful, these are: 1. Strategy 2. Operating Model 3. Tools & Technology 4. MLOps & Engineering 5. Change Management 6. Training and Skills development Looking at these pillars, where does Trustworthy AI sit? – Short answer, in every single one of them. Watch my new video to find out more!",
    date: "Published November 2021",
  },
  {
    url: "https://www.youtube.com/embed/jj28mO-3pcw",
    title: "How to build Trustworthy AI",
    description:
      "Building a POC or black box solution is relatively easy but building AI solutions we can trust is extremely complicated. The risk of not knowing how your solution made a decision, if it is reliable, secure, and fair is extremely high. The consequences of bad AI can range from reputational risk, loss of IP, lawsuits, financial loss, and much more. For AI to be Trustworthy it needs to have at least 5 additional properties to the overall accuracy: 1. Explainability 2. Fairness 3. Robustness 4. Transparency 5. Privacy",
    date: "Published November 2021",
  },
  {
    url: "https://www.youtube.com/embed/P34kfyBDklM",
    title: "How to scale AI",
    description:
      "Most companies fail to achieve the full impact they were hoping for when they started investing in DataScience and AI. Many projects die in the POC phase and never get fully deployed let alone, scaled. Scaling AI is of the biggest challenges faced by industry today and takes much more than a good idea and algorithms. In this video, I explain all the six pillars that impact the success of data science and AI projects: 1. Strategy 2. Operating Model 3. Tools & Technology 4. MLOps & Engineering 5. Change Management 6. Training and Skills development",
    date: "Published November 2021",
  },
  {
    url: "https://www.youtube.com/embed/O3lzjpqlApQ",
    title: "AI Ethics and why shall I care?",
    description:
      "Explore the importance of AI Ethics and the question, 'Just because we can, should we?' Learn why ethical AI is crucial and share your thoughts on this critical topic.",
    date: "Published November 2021",
  },
  {
    url: "https://www.youtube.com/embed/rbkMpblErFw",
    title: "What is a data scientist? And where do I start?",
    description:
      "As CTO for AI at IBM MEA, I address common questions about Data Science and AI. This video covers what it takes to become a data scientist, overcoming challenges, and building ethical, trustworthy AI.",
    date: "Published November 2021",
  },
];

const conferenceVideos = [
  {
    url: "https://www.youtube.com/embed/RWPipuFWLRE",
    title: "Global AI Summit",
    description:
      "Panel: AI through the Lens of Equality, Accessibility and Transparency. Held in KSA, Riyadh.",
    date: "September 2022",
  },
  {
    url: "https://www.youtube.com/embed/sMbNKRyFAMY",
    title: "World Data Forum",
    description:
      "Panel: Data Scientists: What are they? Held in Dubai, UAE.",
    date: "October 2018",
  },
  {
    url: "https://www.youtube.com/embed/4mS7DzL0u1s",
    title: "Artificial Intelligence could create 58 Million jobs by 2022",
    description:
      "A.I. adoption has potential to create millions of new jobs with cities like Dubai paving the way for innovation. “A.I. is already everywhere especially in #Dubai, where there’s a massive demand for data and A.I.”, Dr. Eva-Marie Muller-Stuler, Chief Data Scientist – MEA, IBM UAE, said speaking at the A.I. Everything’ Summit 2019. “We are lucky to be here because we have big support from the government and Smart Dubai to really change society. Of all the countries in the world we are one of the most forward-thinking countries. We have a minister of A.I. we have big awareness on the risk but also on the benefits of innovation”.",
    date: "Published 2019",
  },
  {
    url: "https://www.youtube.com/embed/lG8RQdMIK9U",
    title: "Innovation and Data Science for Governments",
    description:
      "What is the role of Governments in the future? How are they leveraging Data Science and AI? What are the threads they are facing and how can they best prepare for the future? Held in February 2023.",
    date: "February 2023",
  },
  {
    url: "https://www.youtube.com/embed/FdPmLKJN1qQ",
    title: "WiDS Abu Dhabi and Dubai 2020 Keynote",
    description:
      "KEYNOTE: Data Science opportunities in times of crisis. Presented by Dr. Eva-Marie Muller-Stuler, Analytics and AI practice leader, GBS IBM.",
    date: "Published September 2020",
  },
  {
    url: "https://www.youtube.com/embed/LzxMvizFwrQ",
    title: "Women's Majlis | Women in Tech | October 21, 2020 | #WhatsHerStory Dubai Future Foundation",
    description:
      "To inspire the next generation of women in tech, we invited some of the successful women in the tech industry to join our Women’s Majlis session to learn more about their individual stories as they share their experiences as women working in tech, explore the reasons for the existing gender gap in the technology sector and how we can inspire the next generation of women in tech. Organized by Dubai Future Foundation.",
    date: "Published November 2020",
  },
  {
    url: "https://www.youtube.com/embed/IDJpuTsxysI",
    title: "Girls and Women Talking Tech Interview 35 - Dr. Eva-Marie Muller-Stuler and Habiba Aziz",
    description:
      "Dr. Eva-Marie Muller-Stuler, Advanced Analytics & AI Practice Leader/Chief Data Scientist for IBM MEA, interviewed by Habiba Aziz, Resident Data Analyst & Master's student, Queen's College, CUNY. Dr Eva-Marie discusses how she has always been interested in tech as a hobby, but she wanted to become a doctor as a child. Her father started coding when she was eight years old, and that rubbed off on her. After doing her PhD, she got drawn into data science and analytics. Dr Eva-Marie loves everything to do with data and argues that data science is so much more than coding and doing Kaggle competitions; the real essence of data science is solving societal and business issues. Habiba Aziz shares her journey into data analytics and talks about exciting prospects to start a career in data science in medicine.",
    date: "Published January 2021",
  },
  {
    url: "https://www.youtube.com/embed/_XBVzOYu2EI",
    title: "Keynote: Fighting Bias and building trust in AI at MKAI",
    description:
      "Presentation: Fighting Bias and building trust in AI. Dr. Eva-Marie Muller-Stuler is the Chief Data Scientist and leader of the Centre of Excellence for IBM MEA. She has led ground-breaking Data Science teams and implementations of fully deployed large-scale AI projects globally for over 15 years. Eva-Marie is passionate about advising IBM’s top-tier clients and governments in developing data strategies that show value and to transform them into data-driven organizations that lead the field.",
    date: "Published February 2021",
  },
  {
    url: "https://www.youtube.com/embed/PogKvqxBXu8",
    title: "The Power of Ethical AI",
    description:
      "Dr. Eva-Marie Muller-Stuler is CTO AI & Chief Data Scientist at IBM Middle East & Africa and known as one of the world’s best Data Scientists. As a pioneer of ethical AI, her notable keynote at the Geomarketing Competence Day by infas 360 and infas LT on 05.10.2021 focused on 'Data Ethics'. With 'The Power of Ethical AI', she addressed many current topics and developments around the event motto 'The Power of Data'. The central question was: What ethical-moral risks does the use and processing of data pose for society, and how can we minimize these risks? A fascinating perspective from a globally respected expert in data ethics.",
    date: "Published October 2021",
  },
];

const Videos = () => {
  const renderDescription = (description) => {
    const pointRegex = /\d+\.\s+[^\d]+/g;
    const points = description.match(pointRegex);

    if (points) {
      const pointsStartIndex = description.indexOf(points[0]);
      const textBeforePoints = description.substring(0, pointsStartIndex).trim();
      const textAfterPoints = description.substring(pointsStartIndex + points.join("").length).trim();

      const pointItems = points.map((point) => {
        const pointText = point.replace(/^\d+\.\s+/, "");
        return pointText.trim();
      });

      return (
        <>
          {textBeforePoints && <p className="video-description">{textBeforePoints}</p>}
          <ol className="video-description-points">
            {pointItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
          {textAfterPoints && <p className="video-description">{textAfterPoints}</p>}
        </>
      );
    }

    return <p className="video-description">{description}</p>;
  };

  const renderVideoSection = (title, videos) => (
    <div className="video-section">
      <h2 className="section-title">{title}</h2>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className={`video-item ${index % 2 === 0 ? "odd" : "even"}`}>
            <div className="video-container">
              <iframe
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            <div className="video-content">
              <h3 className="video-title">{video.title}</h3>
              {renderDescription(video.description)}
              <p className="video-date">{video.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="home-container">
      {renderVideoSection("Videos", dataScienceVideos)}
      {renderVideoSection("Conferences", conferenceVideos)}
    </div>
  );
};

export default Videos;