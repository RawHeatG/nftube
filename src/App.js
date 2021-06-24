import { VideoListing, VideoPlayer, Playlists, Login, Signup } from "./Pages";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
