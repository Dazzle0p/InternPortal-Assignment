import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Intern Portal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login to Dashboard
        </button>
      </form>
      <p className="demo-note">
        No authentication needed - this is a demo portal
      </p>
    </div>
  );
};

export default Login;
