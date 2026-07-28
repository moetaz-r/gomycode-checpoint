import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./outils/PrivateRoute";
import PublicRoute from "./outils/PublicRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <h1>welcome to Authentication App</h1>
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
