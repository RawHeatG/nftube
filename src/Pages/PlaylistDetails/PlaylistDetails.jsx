import { useEffect, useState } from "react";
import { Navbar, Sidebar, Loader, VideoCard } from "../../Components";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Contexts";
import "./PlaylistDetails.css";
import { getPlaylistData } from "../../services/dataServices";

export function PlaylistDetails() {
  const { currentUser } = useAuth();
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    setPlaylist(null);
    (async function () {
      const response = await getPlaylistData(currentUser.userId, playlistId);
      console.log(response);
      response.data.success
        ? setPlaylist(response.data.data)
        : console.error("Error while Loding playlists");
    })();
  }, [currentUser.userId, playlistId]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      {!playlist ? (
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
