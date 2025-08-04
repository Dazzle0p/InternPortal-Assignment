import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // In a real app, this would be an API call
        const mockUser = {
          username: user.username,
          referralCode: "ALEX2025",
          donations: 1850,
          role: "Software Intern",
          stats: {
            daysActive: 45,
            tasksCompleted: 28,
            projects: 5,
            mentorRating: 4.8,
          },
          metrics: {
            referrals: 12,
            points: 1250,
            rank: 8,
          },
        };

        setTimeout(() => {
          setUser(mockUser);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const login = (username) => {
    // Generate referral code based on username
    const referralCode = `${username.toUpperCase().substring(0, 5)}2025`;
    setUser({
      username,
      referralCode,
      donations: 0,
      role: "Intern",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
