import { VideoListing, VideoPlayer, Playlists } from "./Pages";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div class="nav">
        <div className="logo">
          <Link to="/" className="link">
            <h1>NFTube</h1>
          </Link>
        </div>
        <div className="nav-right">
          <ul class="nav-menu">
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-option">Home</div>
      </div>
      <div className="canvas">
        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="/watch/:videoId" element={<VideoPlayer />} />
          <Route path="/playlists" element={<Playlists />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
