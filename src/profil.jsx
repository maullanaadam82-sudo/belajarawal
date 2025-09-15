import React from "react";
import "./profil.css";

export default function Profil() {
  return (
    <div className="profil-container">
      <h1>Profil Saya</h1>
      <img
        src="https://via.placeholder.com/150"
        alt="Profil"
        className="profil-img"
      />
      <p>Halo, ini halaman profil sederhana!</p>
    </div>
  );
}
