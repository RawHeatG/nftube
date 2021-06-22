import { useParams } from "react-router-dom";
import { Navbar, Sidebar } from "../../Components";
import { useData } from "../../Contexts";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";
import "./VideoPlayer.css";

export function VideoPlayer() {
  const { videoId } = useParams();

  const { data, dispatch, playlists } = useData();
  console.log(playlists);
  const { title, description, uploadedBy, likes, views, subscribers } =
    data.find((item) => item.videoId === videoId);
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
          <div className="video-player">
            <div className="video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
              ></iframe>
            </div>
            <h1>{title}</h1>
            <div className="engagements">
              <div className="engagements-left">
                <div>{views} views</div>
                <div>{likes} likes</div>
              </div>
              <div className="engagements-right">
                <ThumbUpOutlinedIcon
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_PLAYLIST",
                      payload: { playlistId: "liked", videoId: videoId },
                    })
                  }
                >
                  Dislike
                </ThumbUpOutlinedIcon>
                <ThumbUpIcon
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_PLAYLIST",
                      payload: { playlistId: "liked", videoId: videoId },
                    })
                  }
                >
                  Like
                </ThumbUpIcon>
                <WatchLaterOutlinedIcon
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_PLAYLIST",
                      payload: { playlistId: "watched", videoId: videoId },
                    })
                  }
                >
                  Watch Later
                </WatchLaterOutlinedIcon>
              </div>
            </div>

            <div className="uploaded-by">
              <div>
                <h2>{uploadedBy}</h2>
                <div className="subscribers">{subscribers} Subscribers</div>
              </div>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
