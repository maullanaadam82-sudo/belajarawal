import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/profil">Profil</Link></li>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
}
