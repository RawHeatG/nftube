import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div onClick={() => navigate("/")} className="sidebar-item">
        <HomeRoundedIcon />
        Home
      </div>
      <div onClick={() => navigate("/")} className="sidebar-item">
        <WhatshotRoundedIcon />
        Trending
      </div>
      <div onClick={() => navigate("/")} className="sidebar-item">
        <WatchLaterIcon />
        Watch Later
      </div>
      <div onClick={() => navigate("/playlist")} className="sidebar-item">
        <ThumbUpRoundedIcon />
        Liked Videos
      </div>
      <div onClick={() => navigate("/playlist")} className="sidebar-item">
        <PlaylistPlayRoundedIcon />
        Playlists
      </div>
    </div>
  );
}
