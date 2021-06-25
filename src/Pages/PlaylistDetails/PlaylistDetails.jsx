import { Navbar, Sidebar, Loader, VideoCard } from "../../Components";
import { useParams } from "react-router-dom";
import { useData } from "../../Contexts";
import "./PlaylistDetails.css";

export function PlaylistDetails() {
  const { data, playlists } = useData();
  const { playlistId } = useParams();
  const playlist = playlists.find((playlist) => playlist.id === playlistId);
  console.log(playlist);
  return (
    <div>
      <Navbar />
      <Sidebar />
      {!data ? (
        <div className="canvas">
          <Loader />
        </div>
      ) : (
        <div className="canvas">
          <h1 className="text-large">{playlist.name}</h1>
          <div>
            {playlist.videos.length === 0 ? (
              <h2>No Videos added to this playlist yet</h2>
            ) : (
              <div className="playlist-details">
                {playlist.videos.map((video) => (
                  <VideoCard key={video.videoId} video={video} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
