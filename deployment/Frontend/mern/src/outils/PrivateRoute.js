// PrivateRoute.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("authToken"));
  }, []);
  return isAuthenticated ? children : navigate("/login");
};

export default PrivateRoute;
