import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const Sidebar = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  if (!user) return null;

  // Extract initials for avatar
  const initials = user.username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(user.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="sidebar">
      {/* Welcome Card */}
      <div className="welcome-card">
        <div className="avatar">{initials.substring(0, 2)}</div>
        <h2>{user.username}</h2>
        <p>{user.role}</p>

        <div className="badge-container">
          <div className="badge">
            <i className="fas fa-star"></i> Top 10%
          </div>
          <div className="badge">
            <i className="fas fa-bolt"></i> Active
          </div>
        </div>
      </div>

      {/* Referral Card */}
      <div className="referral-card">
        <h3>
          <i className="fas fa-gift"></i> Your Referral Code
        </h3>
        <div className="referral-code" onClick={copyReferralCode}>
          {user.referralCode}
          <i className={`fas ${copied ? "fa-check" : "fa-copy"}`}></i>
        </div>
        <p>Share this code with friends to earn rewards when they join!</p>
      </div>

      {/* Stats Card */}
      <div className="stats-card">
        <h3>
          <i className="fas fa-chart-line"></i> Your Statistics
        </h3>
        <div className="stat-item">
          <span className="label">Days Active</span>
          <span className="value">{user.stats.daysActive}</span>
        </div>
        <div className="stat-item">
          <span className="label">Tasks Completed</span>
          <span className="value">{user.stats.tasksCompleted}</span>
        </div>
        <div className="stat-item">
          <span className="label">Projects</span>
          <span className="value">{user.stats.projects}</span>
        </div>
        <div className="stat-item">
          <span className="label">Mentor Rating</span>
          <span className="value">{user.stats.mentorRating}/5</span>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-header">
            <span>Weekly Goal</span>
            <span>65%</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <span>Intern Portal v2.0</span>
        <span>Online</span>
      </div>
    </div>
  );
};

export default Sidebar;
