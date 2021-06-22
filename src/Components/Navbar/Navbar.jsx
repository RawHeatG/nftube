import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
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
  );
}
