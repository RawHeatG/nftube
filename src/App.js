import { VideoListing, VideoPlayer, Playlists } from "./Pages";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
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
