import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const authorize = { token: true };
  //      You can decide how you're gonna authorize
  //   user in your app and implement it here accordingly
  return authorize.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
