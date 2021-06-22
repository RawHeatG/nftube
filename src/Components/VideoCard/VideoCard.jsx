import { Link } from "react-router-dom";
import "./VideoCard.css";

export function VideoCard({ video }) {
  const { videoId, title } = video;
  return (
    <div>
      <Link class="link" to={`/watch/${videoId}`}>
        <div class="video-card">
          <img
            src={`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={videoId}
          />
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
}
