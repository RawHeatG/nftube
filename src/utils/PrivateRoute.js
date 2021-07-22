import { Route, Navigate, useParams } from "react-router-dom";
import { useAuth } from "../Contexts";

export function PrivateRoute({ path, ...props }) {
  const param = useParams();
  const { currentUser } = useAuth();

  // change :playlistId to the actual value in useParmas
  path = `/${path.split("/")[1]}/${param.playlistId}/`;
  return (
    <>
      {currentUser ? (
        <Route {...props} path={path} />
      ) : (
        <Navigate state={{ from: path }} replace to="/login" />
      )}
    </>
  );
}
