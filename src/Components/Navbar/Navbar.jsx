import { Link } from "react-router-dom";
import "./Navbar.css";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="link">
          <h1>
            NF<span>Tube</span>
          </h1>
        </Link>
      </div>
      <div className="nav-right">
        <ul className="nav-menu">
          <li>
            <Link to="/">
              <PersonRoundedIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
