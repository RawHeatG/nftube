import { reducer, initialState } from "../reducers";
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
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

  const [{ playlists }, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ data, dispatch, playlists }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
