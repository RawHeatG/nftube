import { useEffect } from "react";
import { Navbar, Sidebar, Loader, VideoCard } from "../../Components";
import { useData, useAuth } from "../../Contexts";
import "./VideoListing.css";
import axios from "axios";
import { API_URL } from "../../utils";

export function VideoListing() {
  const { currentUser } = useAuth();
  const { data, dispatch, playlists } = useData();
  console.log({ playlists });
  useEffect(() => {
    (async () => {
      if (currentUser) {
        const response = await axios(
          `${API_URL}/playlist/${currentUser.userId}`
        );
        response.data.success
          ? dispatch({
              type: "INITIALIZE_PLAYLISTS",
              payload: response.data.data,
            })
          : console.error("Error occured while fetching playlists");
      }
    })();
  }, [currentUser]);
  console.log(data);
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
