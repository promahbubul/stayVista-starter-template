import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to="/login"
      state={{
        from: location,
      }}
      replace
    ></Navigate>
  );
};

export default PrivetRoute;
