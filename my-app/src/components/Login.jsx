import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth.css";

export default function Login({ setUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();   

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload

    if (email) {
      setUser(email); // Set user state globally
      navigate("/"); // Redirect to homepage
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <h2>Sign in</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
