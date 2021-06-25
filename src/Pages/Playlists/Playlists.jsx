import { Navbar, Sidebar, Loader, VideoCard } from "../../Components";
import { useData } from "../../Contexts";
import "./Playlists.css";

export function Playlists() {
  const { data, playlists } = useData();
  console.log(playlists);
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
