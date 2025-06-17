import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const navigate=useNavigate();
function OpenAccount() {
  const { user, setUser } = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
    if (user) {
      window.location.href = "https://zerodha-dashboard-ypwy.onrender.com"; // Change if deployed
    } else {
      navigate("/signup");
    }
  };
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
            onClick={handleClick}
          >
            Sign up Now
          </button>
      </div>
    </div>
  );
}

export default OpenAccount;
