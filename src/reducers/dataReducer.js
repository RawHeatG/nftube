export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          return playlist.id === payload.playlistId
            ? { ...playlist, videos: [...playlist.videos, payload.video] }
            : playlist;
        }),
      };
    }
    case "REMOVE_FROM_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          return playlist.id === payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video.videoId !== payload.video.videoId
                ),
              }
            : playlist;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export const initialState = {
  playlists: [
    {
      name: "Liked Videos",
      id: "liked",
      videos: [],
    },
    {
      name: "Watch Later",
      id: "watchLater",
      videos: [],
    },
    {
      name: "History",
      id: "history",
      videos: [],
    },
    {
      name: "",
      id: "",
      videos: [],
    },
  ],
};
