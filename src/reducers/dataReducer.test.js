import { dataReducer } from "./dataReducer";

describe("Testing DataReducer", () => {
  test("Should Reset State", () => {
    const initialState = {
      playlists: [
        {
          name: "Liked Videos",
          id: "liked",
          videos: [{ videoId: "video1" }],
        },
        {
          name: "Watch Later",
          id: "watchLater",
          videos: [{ videoId: "video3" }],
        },
        {
          name: "History",
          id: "history",
          videos: [{ videoId: "video4" }, { videoId: "video2" }],
        },
      ],
    };

    const reducedState = dataReducer(initialState, { type: "RESET_STATE" });

    expect(reducedState).toEqual({
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
      ],
    });
  });

  test("Should Initialize Playlist", () => {
    const initialState = {
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
      ],
    };

    const reducedState = dataReducer(initialState, {
      type: "INITIALIZE_PLAYLISTS",
      payload: [
        {
          name: "Liked Videos",
          id: "liked",
          videos: [{ videoId: "video1" }],
        },
        {
          name: "Watch Later",
          id: "watchLater",
          videos: [{ videoId: "video3" }],
        },
        {
          name: "History",
          id: "history",
          videos: [{ videoId: "video4" }, { videoId: "video2" }],
        },
      ],
    });

    expect(reducedState).toEqual({
      playlists: [
        {
          name: "Liked Videos",
          id: "liked",
          videos: [{ videoId: "video1" }],
        },
        {
          name: "Watch Later",
          id: "watchLater",
          videos: [{ videoId: "video3" }],
        },
        {
          name: "History",
          id: "history",
          videos: [{ videoId: "video4" }, { videoId: "video2" }],
        },
      ],
    });
  });

  test("Should add video to playlist", () => {
    const initialState = {
      playlists: [
        {
          name: "Liked Videos",
          id: "liked",
          videos: [{ videoId: "video1" }],
        },
        {
          name: "Watch Later",
          id: "watchLater",
          videos: [{ videoId: "video3" }],
        },
        {
          name: "History",
          id: "history",
          videos: [{ videoId: "video4" }, { videoId: "video2" }],
        },
      ],
    };

    const reducedState = dataReducer(initialState, {
      type: "ADD_TO_PLAYLIST",
      payload: {
        playlistId: "watchLater",
        video: { videoId: "video8" },
      },
    });

    expect(reducedState).toEqual({
      playlists: [
        {
          name: "Liked Videos",
          id: "liked",
          videos: [{ videoId: "video1" }],
        },
        {
          name: "Watch Later",
          id: "watchLater",
          videos: [{ videoId: "video3" }, { videoId: "video8" }],
        },
        {
          name: "History",
          id: "history",
          videos: [{ videoId: "video4" }, { videoId: "video2" }],
        },
      ],
    });
  });

  test("Should remove video from playlist", () => {
    const initialState = {
      playlists: [
        {
          name: "Liked Videos",
          id: "liked",
          videos: [{ videoId: "video1" }],
        },
        {
          name: "Watch Later",
          id: "watchLater",
          videos: [{ videoId: "video3" }, { videoId: "video8" }],
        },
        {
          name: "History",
          id: "history",
          videos: [{ videoId: "video4" }, { videoId: "video2" }],
        },
      ],
    };

    const reducedState = dataReducer(initialState, {
      type: "REMOVE_FROM_PLAYLIST",
      payload: {
        playlistId: "watchLater",
        video: { videoId: "video8" },
      },
    });

    expect(reducedState).toEqual({
      playlists: [
        {
          name: "Liked Videos",
          id: "liked",
          videos: [{ videoId: "video1" }],
        },
        {
          name: "Watch Later",
          id: "watchLater",
          videos: [{ videoId: "video3" }],
        },
        {
          name: "History",
          id: "history",
          videos: [{ videoId: "video4" }, { videoId: "video2" }],
        },
      ],
    });
  });
});
