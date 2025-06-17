import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleDashboardClick = (e) => {
    e.preventDefault();
    if (user) {
      window.location.href = "https://zerodha-dashboard-ypwy.onrender.com"; // Change if deployed
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container-fluid px-4">
        {/* Left side: Logo + Welcome */}
        <div className="d-flex align-items-center gap-3">
          <Link className="navbar-brand m-0" to="/">
            <img src="media/images/logo.svg" style={{ width: "120px" }} alt="Logo" />
          </Link>
          {user && (
            <span className="navbar-text">
              Welcome, <strong>{user.name}</strong>
            </span>
          )}
        </div>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center: Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary btn-sm" onClick={handleDashboardClick}>
                Dashboard
              </button>
            </li>
          </ul>
        </div>

        {/* Right side: Login/Logout */}
        <div>
          {user ? (
            <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className="btn btn-primary btn-sm" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
