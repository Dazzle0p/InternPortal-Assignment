# 🧑‍💼 Basic Full Stack Intern Portal

This is a simple full stack **Intern Portal** application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It provides a dummy login system, a dashboard with intern details, donation tracking, a rewards section, and a leaderboard for top performers.

![Dashboard Screenshot](https://dashboard-screenshot.png)

---

## 🚀 Features

### 🔧 Frontend

- Dummy login page (no actual authentication)
- Dashboard with:
  - Intern name
  - Auto-generated referral code
  - Donations raised (fetched from backend)
  - Rewards/unlockables section (static)
- Leaderboard page showing top interns
- Responsive design with clean UI

### 🛠️ Backend

- REST API built with Express.js
- MongoDB data storage using Mongoose
- API Endpoints:
  - `/api/user` - Retrieve intern data
  - `/api/leaderboard` - Get top interns by donations
  - `/api/seed` - Seed the database with sample data
- Simulated data persistence

---

## ⚙️ Tech Stack

### 🖥️ Frontend

- React 18
- React Router 6
- HTML5/CSS3
- Fetch API

### 🌐 Backend

- Node.js 18+
- Express 4
- MongoDB 6+
- Mongoose ODM
- CORS middleware

---

## 📦 Setup Instructions

### ✅ Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally on port `27017`)
- npm or yarn package manager

---

### 📁 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/intern-portal.git
   cd intern-portal
   ```
