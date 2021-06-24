import { useState, useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { API_URL } from "../utils";
import axios from "axios";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios(`${API_URL}/video`);
        console.log(response);
        if (response.data.success) {
          setData(response.data.data);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_TO_PLAYLIST": {
        // data = data.map( item => item.videoId === payload.videoId ? {...item, videoId: item.videoId + 1} : item )
        // console.log(data)
        // const playlist = state.playlists.find( list => list.id === payload.id )
        return {
          ...state,
          playlists: state.playlists.map((playlist) => {
            return playlist.id === payload.playlistId
              ? { ...playlist, videos: [...playlist.videos, payload.videoId] }
              : playlist;
          }),
        };
      }
      case "REMOVE_FROM_PLAYLIST": {
        // data = data.map( item => item.videoId === payload.videoId ? {...item, videoId: item.videoId - 1} : item )
        return {
          ...state,
          playlists: state.playlists.map((playlist) => {
            return playlist.id === payload.playlistId
              ? {
                  ...playlist,
                  videos: playlist.videos.filter(
                    (item) => item !== payload.videoId
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

  const [{ playlists }, dispatch] = useReducer(reducer, {
    playlists: [
      {
        name: "Liked Videos",
        id: "liked",
        videos: [],
      },
      {
        name: "Watch Later",
        id: "watched",
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
  });

  return (
    <DataContext.Provider value={{ data, dispatch, playlists }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
