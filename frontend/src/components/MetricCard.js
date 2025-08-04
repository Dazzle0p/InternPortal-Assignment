import React from "react";

const MetricCard = ({ title, value, icon, color, progress }) => {
  return (
    <div className="metric-card">
      <div className="header">
        <div className="title">{title}</div>
        <div
          className="icon"
          style={{
            background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
              color.slice(3, 5),
              16
            )}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`,
            color: color,
          }}
        >
          <i className={`fas ${icon}`}></i>
        </div>
      </div>
      <div className="value">{value}</div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default MetricCard;
