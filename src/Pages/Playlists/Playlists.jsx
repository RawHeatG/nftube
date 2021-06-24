import { Navbar, Sidebar } from "../../Components";
import { useData } from "../../Contexts";
import "./Playlists.css";

export function Playlists() {
  const { data } = useData();
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
