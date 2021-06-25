import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Sidebar, Loader } from "../../Components";
import { useData } from "../../Contexts";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import "./VideoPlayer.css";

export function VideoPlayer() {
  const { videoId } = useParams();

  const { data, dispatch, playlists } = useData();
  console.log(playlists);
  const video = data.find((item) => item.videoId === videoId);
  const { title, description, uploadedBy, likes, views, subscribers } = video;
  const isVideoInPlaylist = (playlistId, videoId) => {
    return playlists
      .find((list) => list.id === playlistId)
      .videos.find((video) => video.videoId === videoId)
      ? true
      : false;
  };

  const addToHistory = (video) => {
    isVideoInPlaylist("history", video.videoId) &&
      dispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: { playlistId: "history", video: video },
      });
    dispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { playlistId: "history", video: video },
    });
  };

  useEffect(() => {
    addToHistory(video);
  }, []);

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
                {console.log(isVideoInPlaylist("liked", videoId))}
                {isVideoInPlaylist("liked", videoId) ? (
                  <ThumbUpIcon
                    className="engagements-right-selected"
                    onClick={() => {
                      console.log("Clicked", videoId);
                      dispatch({
                        type: "REMOVE_FROM_PLAYLIST",
                        payload: { playlistId: "liked", video: video },
                      });
                    }}
                  ></ThumbUpIcon>
                ) : (
                  <ThumbUpIcon
                    onClick={() => {
                      console.log("Clicked", videoId);
                      dispatch({
                        type: "ADD_TO_PLAYLIST",
                        payload: { playlistId: "liked", video: video },
                      });
                    }}
                  ></ThumbUpIcon>
                )}

                {isVideoInPlaylist("watchLater", videoId) ? (
                  <WatchLaterIcon
                    className="engagements-right-selected"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_PLAYLIST",
                        payload: { playlistId: "watchLater", video: video },
                      })
                    }
                  ></WatchLaterIcon>
                ) : (
                  <WatchLaterIcon
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_PLAYLIST",
                        payload: { playlistId: "watchLater", video: video },
                      })
                    }
                  ></WatchLaterIcon>
                )}
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
