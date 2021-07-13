import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Sidebar, Loader } from "../../Components";
import { useData, useAuth } from "../../Contexts";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import "./VideoPlayer.css";
import { updatePlaylist } from "../../services/dataServices";

export function VideoPlayer() {
  const { videoId } = useParams();
  const { currentUser } = useAuth();

  const { data, dispatch, playlists } = useData();
  const video = data.find((item) => item.videoId === videoId);
  const { title, description, uploadedBy, likes, views, subscribers } = video;

  console.log("Playlists:", playlists);

  const isVideoInPlaylist = (playlistId, videoId) => {
    console.log(
      playlists
        .find((list) => list.id === playlistId)
        .videos.find((video) => video.videoId === videoId)
    );
    return playlists
      .find((list) => list.id === playlistId)
      .videos.find((video) => video.videoId === videoId);
  };

  const updatePlaylistInDb = async (playlistId, video) => {
    console.log("Update this vode in db", video._id, video.videoId);
    const response = await updatePlaylist(
      currentUser.userId,
      playlistId,
      video._id
    );
    console.log(response);
    return response.data.success;
  };

  useEffect(() => {
    currentUser &&
      (async function () {
        if (
          !playlists
            .find((list) => list.id === "history")
            .videos.find((video) => video.videoId === videoId)
        ) {
          const response = await updatePlaylist(
            currentUser.userId,
            "history",
            video._id
          );
          response
            ? dispatch({
                type: "ADD_TO_PLAYLIST",
                payload: { playlistId: "history", video: video },
              })
            : console.error("Error while updating in DB");
        }
      })();
  }, [currentUser, dispatch, playlists, video, videoId]);

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
                {console.log(
                  "Output of isVideosInPlailist",
                  isVideoInPlaylist("liked", videoId)
                )}
                {isVideoInPlaylist("liked", videoId) ? (
                  <ThumbUpIcon
                    className="engagements-right-selected"
                    onClick={async () => {
                      const response = await updatePlaylistInDb("liked", video);
                      response &&
                        dispatch({
                          type: "REMOVE_FROM_PLAYLIST",
                          payload: { playlistId: "liked", video: video },
                        });
                    }}
                  ></ThumbUpIcon>
                ) : (
                  <ThumbUpIcon
                    onClick={async () => {
                      const response = await updatePlaylistInDb("liked", video);
                      response &&
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
                    onClick={async () => {
                      const response = await updatePlaylistInDb(
                        "watchLater",
                        video
                      );
                      response &&
                        dispatch({
                          type: "REMOVE_FROM_PLAYLIST",
                          payload: { playlistId: "watchLater", video: video },
                        });
                    }}
                  ></WatchLaterIcon>
                ) : (
                  <WatchLaterIcon
                    onClick={async () => {
                      const response = await updatePlaylistInDb(
                        "watchLater",
                        video
                      );
                      response &&
                        dispatch({
                          type: "ADD_TO_PLAYLIST",
                          payload: { playlistId: "watchLater", video: video },
                        });
                    }}
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
