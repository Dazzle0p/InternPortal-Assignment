import React, { useState } from "react";

const Rewards = () => {
  const rewards = [
    {
      id: 1,
      name: "Premium Coffee Kit",
      icon: "fa-mug-hot",
      points: 500,
      description: "Artisan coffee beans and accessories",
    },
    {
      id: 2,
      name: "Tech Upgrade",
      icon: "fa-laptop",
      points: 1200,
      description: "Wireless headphones or portable speaker",
    },
    {
      id: 3,
      name: "Lunch with CEO",
      icon: "fa-utensils",
      points: 2500,
      description: "Exclusive lunch and mentorship session",
    },
    {
      id: 4,
      name: "Conference Pass",
      icon: "fa-plane",
      points: 3500,
      description: "Tech conference ticket + travel",
    },
  ];

  const [unlocked, setUnlocked] = useState({});

  const handleUnlock = (id) => {
    setUnlocked({ ...unlocked, [id]: true });

    // Simulate API call to unlock reward
    setTimeout(() => {
      // In a real app, you would update the user's rewards
    }, 500);
  };

  return (
    <div className="rewards-section">
      <div className="header">
        <h2>Available Rewards</h2>
        <a href="#" className="view-all">
          See All <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="rewards-grid">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`reward-card ${unlocked[reward.id] ? "unlocked" : ""}`}
          >
            <div className="reward-image">
              <i className={`fas ${reward.icon}`}></i>
            </div>
            <div className="reward-content">
              <h3>{reward.name}</h3>
              <p>{reward.description}</p>
              <div className="reward-footer">
                <div className="points">
                  <i className="fas fa-coins"></i> {reward.points}
                </div>
                <button
                  className="unlock-btn"
                  onClick={() => handleUnlock(reward.id)}
                  disabled={unlocked[reward.id]}
                >
                  {unlocked[reward.id] ? "Unlocked" : "Unlock"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
