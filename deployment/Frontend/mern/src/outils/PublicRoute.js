// PublicRoute.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    setIsAuthenticated(!localStorage.getItem("authToken"));
  }, []);
  return isAuthenticated ? children : navigate("/");
};

export default PublicRoute;
