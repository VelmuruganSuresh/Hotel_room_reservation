import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ user, setUser }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false); // Close the dropdown on logout
  };

  return (
    <div className="nav-bar">
      <img src="logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/register">Register</Link></li>

          {user ? (
            <li className="user-menu">
              <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src="user.png" alt="User" className="user-icon" />
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
}
