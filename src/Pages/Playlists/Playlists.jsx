import { useEffect, useState } from "react";
import { Navbar, Sidebar, Loader, VideoCard } from "../../Components";
import { useAuth } from "../../Contexts";
import { getAllPlaylist } from "../../services/dataServices";
import "./Playlists.css";

export function Playlists() {
  const [playlists, setPlaylists] = useState(null);
  const { currentUser } = useAuth();
  console.log(currentUser);
  useEffect(() => {
    (async function () {
      const response = await getAllPlaylist(currentUser.userId);
      response.data.success
        ? setPlaylists(response.data.data)
        : console.error("Error while Loding playlists");
    })();
  }, [currentUser]);
  console.log(playlists);
  return (
    <div>
      <Navbar />
      <Sidebar />
      {!playlists ? (
        <div className="canvas">
          <Loader />
        </div>
      ) : (
        <div className="canvas">
          <div className="playlists">
            {playlists.map((list) => (
              <div>
                <h1 className="text-large">{list.name}</h1>
                <div className="playlist-items">
                  {list.videos.map((video) => (
                    <VideoCard key={video._id} video={video} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
