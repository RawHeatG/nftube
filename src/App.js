import { VideoListing, VideoPlayer } from "./Pages";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      
      <div class="navbar">
      <Link to="/" className="link"><h1>NFTube</h1></Link>
        <ul class="nav-menu">
          <li><Link to="/">Videos</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
      </Routes>

    </div>
  );
}

export default App;
