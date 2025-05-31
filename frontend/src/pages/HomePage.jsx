import React from "react";
import { Link } from "react-router-dom";
import "../HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to StudyCircle 📚</h1>
      <p className="homepage-description">
        A space where minds meet, ideas bloom, and learning flows like morning light.  
        Whether you're here to teach, learn, or just vibe with knowledge —  
        StudyCircle is your circle of growth, one session at a time.
      </p>
      <div className="homepage-buttons">
        <Link to="/login" className="btn primary-btn">Get Started</Link>
        <Link to="/about" className="btn secondary-btn">Learn More</Link>
      </div>
    </div>
  );
};

export default HomePage;
