import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo login check — replace with actual auth logic
    if (formData.email === "user@example.com" && formData.password === "password") {
      navigate("/dashboard"); // or wherever you want to redirect
    } else {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log in to StudyCircle</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-btn">Login</button>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;