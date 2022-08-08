import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";
import "./App.css";

import {
  SidebarLayoutPage,
  Homepage,
  Likepage,
  Playlistpage,
  Historypage,
  WatchLaterpage,
} from "./pages/index";

import { useDispatch } from "react-redux";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { fetchVideos } from "./store/videoSlice";
import { NotRequireAuth, RequireAuth } from "./requireAuth";
import { Videopage } from "./pages/Videopage/Videopage";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route element={<SidebarLayoutPage />}>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/likes"
            element={
              <RequireAuth>
                <Likepage />
              </RequireAuth>
            }
          />
          <Route
            path="/playlist"
            element={
              <RequireAuth>
                <Playlistpage />
              </RequireAuth>
            }
          />
          <Route
            path="/history"
            element={
              <RequireAuth>
                <Historypage />
              </RequireAuth>
            }
          />
          <Route
            path="/watchlater"
            element={
              <RequireAuth>
                <WatchLaterpage />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <NotRequireAuth> 
                <Login />
              </NotRequireAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <NotRequireAuth>
                <SignUp />
              </NotRequireAuth>
            }
          />
          <Route path="video/:videoId" element={<Videopage />} />
          <Route path="/mockapi" element={<Mockman />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
