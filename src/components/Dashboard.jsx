import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Dashboard.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const quickActions = [
    { id: 1, label: "New Task", icon: "➕", color: "#6366f1" },
    { id: 2, label: "Schedule", icon: "📅", color: "#6d4abeff" },
    { id: 3, label: "Team Chat", icon: "💬", color: "#963f6bff" },
    { id: 4, label: "Reports", icon: "📊", color: "#357c64ff" },
  ];

  const activityFeed = [
    {
      id: 1,
      user: "Sarah Chen",
      action: "completed",
      task: "Q4 Product Roadmap",
      time: "2m ago",
      avatar: "SC",
    },
    {
      id: 2,
      user: "Marcus Johnson",
      action: "assigned",
      task: "User Research Analysis",
      time: "15m ago",
      avatar: "MJ",
    },
    {
      id: 3,
      user: "Emma Wilson",
      action: "commented",
      task: "Design System Updates",
      time: "1h ago",
      avatar: "EW",
    },
    {
      id: 4,
      user: "Alex Rivera",
      action: "created",
      task: "New Sprint Planning",
      time: "2h ago",
      avatar: "AR",
    },
  ];

  return (
    <motion.div
      className="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="dashboard-container">
        {/* Header */}
        <motion.div className="dashboard-header" variants={itemVariants}>
          <div>
            <h1>Team Dashboard</h1>
            <p className="subtitle">Welcome, Here's what's happening today.</p>
          </div>
          <motion.button
            className="ai-assist-btn"
            whileHover={{ scale: 1.15, boxShadow: "0 8px 24px rgba(83, 85, 204, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
                fill="currentColor"
              />
              <path
                d="M10 6C9.45 6 9 6.45 9 7V9H7C6.45 9 6 9.45 6 10C6 10.55 6.45 11 7 11H9V13C9 13.55 9.45 14 10 14C10.55 14 11 13.55 11 13V11H13C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9H11V7C11 6.45 10.55 6 10 6Z"
                fill="currentColor"
              />
            </svg>
            AI Assist
          </motion.button>
        </motion.div>

        {/* Overview Cards */}
        <div className="overview-grid">
          <motion.div
            className="overview-card"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <span className="card-label">Total Tasks</span>
              <motion.div
                className="card-icon"
                style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                📋
              </motion.div>
            </div>
            <div className="card-value">
              {isLoading ? (
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              ) : (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  142
                </motion.span>
              )}
            </div>
            <div className="card-change positive">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 4L12 8H9V12H7V8H4L8 4Z"
                  fill="currentColor"
                />
              </svg>
              <span>+8 from last week</span>
            </div>
          </motion.div>

          <motion.div
            className="overview-card"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <span className="card-label">Active Members</span>
              <motion.div
                className="card-icon"
                style={{ background: "linear-gradient(135deg, #ec4899 0%, #bd3249ff 100%)" }}
              >
                👥
              </motion.div>
            </div>
            <div className="card-value">
              {isLoading ? (
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              ) : (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  12
                </motion.span>
              )}
            </div>
            <div className="card-change neutral">
              <span>All members active</span>
            </div>
          </motion.div>

          <motion.div
            className="overview-card"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <span className="card-label">Completion Rate</span>
              <motion.div
                className="card-icon"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}
              >
                ✅
              </motion.div>
            </div>
            <div className="card-value">
              {isLoading ? (
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              ) : (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  87%
                </motion.span>
              )}
            </div>
            <div className="card-change positive">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 4L12 8H9V12H7V8H4L8 4Z"
                  fill="currentColor"
                />
              </svg>
              <span>+5% this month</span>
            </div>
          </motion.div>

          <motion.div
            className="overview-card ai-insight"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(99, 102, 241, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <span className="card-label">AI Insight</span>
              <motion.div
                className="card-icon ai-icon"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
            <div className="ai-message">
              {isLoading ? (
                <motion.div className="ai-loading">
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Analyzing...
                  </motion.span>
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Team productivity is up 12% this week. Peak hours: 10-11 AM. Consider scheduling important meetings during this window.
                </motion.p>
              )}
            </div>
            <div className="ai-badge">
              <span>Powered by AI</span>
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Quick Actions */}
          <motion.div
            className="section-card"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
          >
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.id}
                  className="quick-action-btn"
                  style={{ "--accent": action.color }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                >
                  <span className="action-icon">{action.icon}</span>
                  <span>{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            className="section-card activity-feed"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="section-header">
              <h3>Recent Activity</h3>
              <motion.button
                className="view-all-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All
              </motion.button>
            </div>
            <div className="activity-list">
              {activityFeed.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="activity-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "rgba(99, 102, 241, 0.05)" }}
                >
                  <div className="activity-avatar">{activity.avatar}</div>
                  <div className="activity-content">
                    <p>
                      <strong>{activity.user}</strong> {activity.action}{" "}
                      <span className="activity-task">{activity.task}</span>
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
