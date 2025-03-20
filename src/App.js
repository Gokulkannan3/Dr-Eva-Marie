import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Videos from "./Components/Videos/Videos";
import Publications from "./Components/Publications/Publications";
import Podcasts from "./Components/Podcasts/Podcasts";
import Events from "./Components/Events/Events";
import "./App.css"; // Ensure this is imported

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={isHome ? "home-bg" : "other-bg"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
