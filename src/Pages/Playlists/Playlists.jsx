import { Navbar, Sidebar } from "../../Components";
import "./Playlists.css";

export function Playlists() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="playlists">
        <h1>You are in Playlists</h1>
      </div>
    </div>
  );
}
