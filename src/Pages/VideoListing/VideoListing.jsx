import { VideoCard } from "../../Components";
import { useEffect, useState } from "react";
import { Navbar, Sidebar } from "../../Components";
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
  });
  return !data ? (
    <div>
      <h1>Loading....</h1>
    </div>
  ) : (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
}
