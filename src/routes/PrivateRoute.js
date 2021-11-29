import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLogin = useSelector((state) => state.isLogin);
  return <>{isLogin ? children : <Navigate to="/login" />}</>;
}
