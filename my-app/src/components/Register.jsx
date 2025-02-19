import { useState } from "react";
import { Link } from "react-router-dom";
import "../Auth.css"; // Import CSS

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Left Side (Sign Up Form) */}
        <div className="auth-left">
          <h2>Sign up</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁️" : "🔒"}
              </span>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>

        {/* Right Side (Welcome Message) */}
        <div className="auth-right">
          <p>Join Us!</p>
        </div>
      </div>
    </div>
  );
}
