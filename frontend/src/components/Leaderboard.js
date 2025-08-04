import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Leaderboard = () => {
  const { user } = useUser();

  // Mock leaderboard data
  const leaderboard = [
    { id: 1, username: "Taylor Kim", department: "Marketing", donations: 2850 },
    {
      id: 2,
      username: "Jordan Smith",
      department: "Engineering",
      donations: 2150,
    },
    {
      id: 3,
      username: "Maya Rodriguez",
      department: "Design",
      donations: 2050,
    },
    { id: 4, username: "Chris Lee", department: "Product", donations: 1950 },
    { id: 5, username: "Sam Wilson", department: "Marketing", donations: 1900 },
    {
      id: 8,
      username: user?.username,
      department: "Engineering",
      donations: user?.donations || 1850,
    },
  ];

  // Sort by donations descending
  const sortedLeaderboard = [...leaderboard].sort(
    (a, b) => b.donations - a.donations
  );

  // Calculate progress percentage
  const maxDonation = Math.max(
    ...sortedLeaderboard.map((item) => item.donations)
  );

  return (
    <div className="leaderboard-section">
      <div className="header">
        <h2>Top Interns Leaderboard</h2>
        <Link to="/leaderboard" className="view-all">
          Full Leaderboard <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Intern</th>
            <th>Department</th>
            <th>Donations</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.slice(0, 5).map((intern, index) => {
            const progress = Math.round((intern.donations / maxDonation) * 100);
            const initials = intern.username
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <tr
                key={intern.id}
                className={
                  user && intern.username === user.username
                    ? "current-user"
                    : ""
                }
              >
                <td className="rank">#{index + 1}</td>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      {initials.substring(0, 2)}
                    </div>
                    <div>{intern.username}</div>
                  </div>
                </td>
                <td>{intern.department}</td>
                <td>${intern.donations.toLocaleString()}</td>
                <td className="progress-cell">
                  <progress value={progress} max="100"></progress>
                  <span>{progress}%</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
