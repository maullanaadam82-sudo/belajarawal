import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import Profil from "./profil";

export default function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/profil" element={isLoggedIn ? <Profil /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
