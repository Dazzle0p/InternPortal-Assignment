const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get user data
router.get("/user", async (req, res) => {
  try {
    // For demo, return first user
    const user = await User.findOne();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get leaderboard
router.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find().sort({ donations: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Seed initial data (for demo)
router.post("/seed", async (req, res) => {
  const users = [
    { username: "Alex Johnson", referralCode: "alex2025", donations: 1500 },
    { username: "Taylor Kim", referralCode: "taylor2025", donations: 2500 },
    { username: "Jordan Smith", referralCode: "jordan2025", donations: 1800 },
  ];

  try {
    await User.deleteMany({});
    await User.insertMany(users);
    res.json({ message: "Database seeded" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
