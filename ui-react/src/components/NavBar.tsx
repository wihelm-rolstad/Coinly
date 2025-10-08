import { Link } from "react-router-dom";
import "../style/nav-bar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h2>Coinly</h2>
        <Link to="/">
          <button>Dashboard</button>
          </Link>
        <Link to="/incomesPage">
          <button>Incomes</button>
        </Link>
        <Link to="/expensesPage">
          <button>Expenses</button>
        </Link>
      <button id="profile-button">Profile</button>
       <Link to="/loginPage" id="logout-link">
        <button id="logout">Log Out</button>
      </Link>
    </div>
  );
};

export default NavBar;