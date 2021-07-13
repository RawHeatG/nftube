import { dataReducer } from "../reducers";
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { getAllVideos } from "../services/dataServices";

const DataContext = createContext();

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
  ],
};

export function DataProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    (async function () {
      try {
        const response = await getAllVideos();
        console.log(response);
        if (response.data.success) {
          setData(response.data.data);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const [{ playlists }, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ data, dispatch, playlists }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
