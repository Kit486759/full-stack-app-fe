import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Action from "./pages/Actions";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  // const token =
  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      dispatch({ type: "login" });
    }
  }, []);

  return (
    <div className="App">
    
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Auth />
                </PublicRoute>
              }
            />
            <Route
              path="/SignUp"
              element={
                <PublicRoute>
                  <Auth />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/Action"
              element={
                <PrivateRoute>
                  <Action />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
  
    </div>
  );
}

export default App;
