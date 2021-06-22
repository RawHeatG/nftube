import { VideoCard } from "../../Components";
import { useEffect, useState } from "react";
import { Navbar, Sidebar } from "../../Components";
import "./VideoListing.css";
import axios from "axios";

export function VideoListing() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://nftubeAPI.rawheatg.repl.co/videos"
      );
      setData(response.data.data);
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <Sidebar />
      {!data ? (
        <div className="canvas">
          <h1>Loading....</h1>
        </div>
      ) : (
        <div className="canvas">
          <div className="video-listing-contianer">
            {data.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
