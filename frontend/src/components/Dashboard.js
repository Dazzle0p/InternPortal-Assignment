import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Rewards from "./Rewards";
import Leaderboard from "./Leaderboard";
import MetricCard from "./MetricCard";

import Sidebar from "./Sidebar";

const Dashboard = () => {
  const { user, loading } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  if (loading) {
    return (
      <div className="dashboard">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // Extract initials for avatar
  const initials = user.username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
          <h1>InternPortal</h1>
        </div>
        <div className="nav-links">
          <Link to="/dashboard" className="active">
            <i className="fas fa-home"></i> Dashboard
          </Link>
          <Link to="/leaderboard">
            <i className="fas fa-trophy"></i> Leaderboard
          </Link>
          <Link to="#">
            <i className="fas fa-tasks"></i> Projects
          </Link>
          <Link to="#">
            <i className="fas fa-calendar"></i> Schedule
          </Link>
        </div>
        <div className="user-actions">
          <button className="notification-btn">
            <i className="fas fa-bell"></i>
            <span className="notification-badge">3</span>
          </button>
          <div className="user-profile">
            <div className="avatar">{initials.substring(0, 2)}</div>
            <div>
              <div className="user-name">{user.username}</div>
              <div className="user-role">{user.role}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          {/* Metrics Grid */}
          <div className="metrics-grid">
            <MetricCard
              title="Total Donations"
              value={`$${user.donations.toLocaleString()}`}
              icon="fa-hand-holding-usd"
              color="#4361ee"
              progress={65}
            />

            <MetricCard
              title="Referrals"
              value={user.metrics.referrals}
              icon="fa-user-friends"
              color="#4cc9f0"
              progress={40}
            />

            <MetricCard
              title="Reward Points"
              value={user.metrics.points.toLocaleString()}
              icon="fa-award"
              color="#f72585"
              progress={50}
            />

            <MetricCard
              title="Leaderboard Rank"
              value={`#${user.metrics.rank}`}
              icon="fa-trophy"
              color="#ff9800"
              progress={80}
            />
          </div>

          {/* Donations Card */}
          <div className="donations-card">
            <div className="header">
              <h2>Donation Progress</h2>
              <a href="#" className="view-all">
                View History <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div className="donation-stats">
              <div className="donation-stat">
                <div className="label">Total Raised</div>
                <div className="value">${user.donations.toLocaleString()}</div>
                <div className="subtext">+ $250 this week</div>
              </div>

              <div className="donation-stat">
                <div className="label">Goal</div>
                <div className="value">$3,000</div>
                <div className="subtext">Target by Dec 2023</div>
              </div>

              <div className="donation-stat">
                <div className="label">Avg. Donation</div>
                <div className="value">$42</div>
                <div className="subtext">Per contributor</div>
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <Rewards />

          {/* Leaderboard Section */}
          <Leaderboard />
        </div>
      </div>

      <footer>
        <p>
          © 2023 InternPortal. All rights reserved. | Designed with ❤️ for
          interns
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
