import {
  VideoListing,
  VideoPlayer,
  Playlists,
  PlaylistDetails,
  Login,
  Signup,
} from "./Pages";
import { PrivateRoute } from "./utils";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
        <PrivateRoute path="/playlist" element={<Playlists />} />
        <PrivateRoute
          path="/playlist/:playlistId"
          element={<PlaylistDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
