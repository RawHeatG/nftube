import { VideoListing, VideoPlayer } from "./Pages";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <div class="navbar">
        <h1>NFTube</h1>
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
