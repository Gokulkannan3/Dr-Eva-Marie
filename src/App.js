import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
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
  // const isHome = location.pathname === "/";
  const [atHome, setAtHome] = useState(true);

  return (
    <div className={atHome ? "home-bg" : "other-bg"}>
      <Routes>
        <Route path="/" element={<Home setAtHome={setAtHome} />} />
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
