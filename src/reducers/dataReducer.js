import { initialState } from "../Contexts/DataContext";

export const dataReducer = (state, { type, payload }) => {
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

    case "INITIALIZE_PLAYLISTS": {
      return { ...state, playlists: payload };
    }

    case "RESET_STATE": {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
