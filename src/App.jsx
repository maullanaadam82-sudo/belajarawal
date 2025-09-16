import React from "react";
import Profil from "./profil";
import Login from "./login";
import Dashboard from "./dashboard";
function App() {
  return (
    <div>
      <h1>Halo Dunia</h1>
      <Login />
      <p>Ini dari fitur-dashboard</p>

    </div>
  );
}



export default function App() {
  return (
    <div>
      <Profil />
    </div>
  );
}
