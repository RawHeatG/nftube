import { useAuth } from "../../Contexts";
import { useState, useEffect } from "react";
import { Navbar, Sidebar } from "../../Components";

import { Link } from "react-router-dom";
import "./Login.css";

export function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordStyle, setPasswordStyle] = useState({});

  const { currentUser, loginUserWithCredentials, logoutUser } = useAuth();

  function validatePassword(password) {
    const passwordRegex = /^[\w!@#\$%\^\&*\)\(+=._-]{6,}$/;
    return passwordRegex.test(password);
  }

  useEffect(() => {
    if (password) {
      setPasswordStyle(
        validatePassword(password)
          ? { backgroundColor: "#8ac926", color: "white" }
          : { backgroundColor: "#ff595e", color: "white" }
      );
    } else {
      setPasswordStyle({});
    }
  }, [password]);

  const loginHandler = () => {
    loginUserWithCredentials(username, password);
  };

  const logoutHandler = () => {
    logoutUser();
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="canvas">
        <div className="login">
          {currentUser && (
            <div style={{ textAlign: "centre" }}>
              <h1>Hi {currentUser.name}👋</h1>
              <h2>Come back soon!</h2>
              <button className="btn btn-warning" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          )}
          {!currentUser && (
            <div className="form">
              <div className="form-wrapper">
                <h1>NFT Baazar</h1>
                <input
                  placeholder="Username..."
                  onChange={(event) => setUsername(event.target.value)}
                />
                <input
                  style={{ ...passwordStyle }}
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button className="btn btn-primary" onClick={loginHandler}>
                  Log In
                </button>
                <h3>
                  Don't have an accont?
                  <Link className="link" to="/signup">
                    <span> Sign Up!</span>
                  </Link>
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
