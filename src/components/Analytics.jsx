import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Analytics.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [selectedMetric, setSelectedMetric] = useState("productivity");
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // Simulate data loading
    const timer = setTimeout(() => {
      const data = generateChartData(selectedPeriod);
      setChartData(data);
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [selectedPeriod]);

  const generateChartData = (period) => {
    const days = period === "week" ? 7 : period === "month" ? 30 : 90;
    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      value: Math.floor(Math.random() * 40) + 60,
      tasks: Math.floor(Math.random() * 20) + 10,
    }));
  };

  const maxValue = Math.max(...chartData.map((d) => d.value), 100);
  const chartHeight = 200;

  const aiInsights = [
    {
      type: "trend",
      title: "Productivity Trend",
      message: "Team productivity has increased 18% over the past week. Peak performance occurs Tuesday-Thursday between 10-11 AM.",
      impact: "high",
      color: "#10b981",
    },
    {
      type: "alert",
      title: "Attention Needed",
      message: "Task completion rate dropped 5% on Fridays. Consider redistributing workload or adjusting deadlines.",
      impact: "medium",
      color: "#f59e0b",
    },
    {
      type: "prediction",
      title: "Forecast",
      message: "Based on current trends, your team is on track to complete 95% of Q4 goals. Maintain current pace.",
      impact: "high",
      color: "#6366f1",
    },
  ];

  const metrics = [
    { id: "productivity", label: "Productivity", value: "87%", change: "+12%", trend: "up" },
    { id: "tasks", label: "Tasks Completed", value: "342", change: "+28", trend: "up" },
    { id: "collaboration", label: "Collaboration", value: "92%", change: "+5%", trend: "up" },
    { id: "efficiency", label: "Efficiency", value: "79%", change: "-3%", trend: "down" },
  ];

  return (
    <motion.div
      className="analytics"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="analytics-container">
        {/* Header */}
        <motion.div className="analytics-header" variants={itemVariants}>
          <div>
            <h1>Analytics & Reports</h1>
            <p className="subtitle">Data-driven insights for your team performance</p>
          </div>
          <div className="header-actions">
            <motion.button
              className="export-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 12L5 8H7.5V3H10.5V8H13L9 12ZM3 13.5V15H15V13.5H3Z"
                  fill="currentColor"
                />
              </svg>
              Export
            </motion.button>
            <motion.button
              className="ai-generate-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9 15C5.69 15 3 12.31 3 9C3 5.69 5.69 3 9 3C12.31 3 15 5.69 15 9C15 12.31 12.31 15 9 15Z"
                  fill="currentColor"
                />
                <path
                  d="M9 5.25C9.414 5.25 9.75 5.586 9.75 6V8.25H12C12.414 8.25 12.75 8.586 12.75 9C12.75 9.414 12.414 9.75 12 9.75H9.75V12C9.75 12.414 9.414 12.75 9 12.75C8.586 12.75 8.25 12.414 8.25 12V9.75H6C5.586 9.75 5.25 9.414 5.25 9C5.25 8.586 5.586 8.25 6 8.25H8.25V6C8.25 5.586 8.586 5.25 9 5.25Z"
                  fill="currentColor"
                />
              </svg>
              Generate Report
            </motion.button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div className="filters-section" variants={itemVariants}>
          <div className="filter-group">
            <label>Time Period</label>
            <div className="filter-buttons">
              {["week", "month", "quarter"].map((period) => (
                <motion.button
                  key={period}
                  className={`filter-btn ${selectedPeriod === period ? "active" : ""}`}
                  onClick={() => setSelectedPeriod(period)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={false}
                  animate={{
                    background:
                      selectedPeriod === period
                        ? "linear-gradient(135deg,  #6366f1 0%, #8b5cf6 100%)"
                        : "white",
                    color: selectedPeriod === period ? "white" : "#64748b",
                  }}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label>Metric</label>
            <div className="filter-buttons">
              {["productivity", "tasks", "collaboration"].map((metric) => (
                <motion.button
                  key={metric}
                  className={`filter-btn ${selectedMetric === metric ? "active" : ""}`}
                  onClick={() => setSelectedMetric(metric)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={false}
                  animate={{
                    background:
                      selectedMetric === metric
                        ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                        : "white",
                    color: selectedMetric === metric ? "white" : "#64748b",
                  }}
                >
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Metrics Cards */}
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="metric-card"
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="metric-header">
                <span className="metric-label">{metric.label}</span>
                <motion.div
                  className={`metric-trend ${metric.trend}`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {metric.trend === "up" ? "↑" : "↓"}
                </motion.div>
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-change ${metric.trend}`}>
                {metric.change} from last period
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Chart */}
        <motion.div
          className="chart-card"
          variants={itemVariants}
          whileHover={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="chart-header">
            <h3>Performance Trend</h3>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-dot" style={{ background: "#6366f1" }}></span>
                <span>Productivity</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: "#10b981" }}></span>
                <span>Tasks</span>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="chart-loading">
              <motion.div
                className="loading-wave"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading chart data...
              </motion.div>
            </div>
          ) : (
            <div className="chart-container">
              <svg
                className="chart-svg"
                viewBox={`0 0 ${chartData.length * 40} ${chartHeight + 40}`}
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((val) => (
                  <line
                    key={val}
                    x1="0"
                    y1={chartHeight - (val / 100) * chartHeight}
                    x2={chartData.length * 40}
                    y2={chartHeight - (val / 100) * chartHeight}
                    stroke="#e2e8f0"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                ))}
                
                {/* Productivity line */}
                <motion.polyline
                  points={chartData
                    .map(
                      (d, i) =>
                        `${i * 40 + 20},${chartHeight - (d.value / maxValue) * chartHeight}`
                    )
                    .join(" ")}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Tasks line */}
                <motion.polyline
                  points={chartData
                    .map(
                      (d, i) =>
                        `${i * 40 + 20},${chartHeight - (d.tasks / 30) * chartHeight}`
                    )
                    .join(" ")}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />

                {/* Data points */}
                {chartData.map((d, i) => (
                  <motion.circle
                    key={i}
                    cx={i * 40 + 20}
                    cy={chartHeight - (d.value / maxValue) * chartHeight}
                    r="4"
                    fill="#6366f1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + i * 0.05, type: "spring" }}
                  />
                ))}
              </svg>
            </div>
          )}
        </motion.div>

        {/* AI Insights Section */}
        <motion.div
          className="ai-insights-section"
          variants={itemVariants}
        >
          <div className="section-title">
            <h3>AI-Generated Insights</h3>
            <span className="ai-badge">Powered by AI</span>
          </div>
          <div className="insights-grid">
            {aiInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="insight-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="insight-header">
                  <div
                    className="insight-icon"
                    style={{ background: `${insight.color}15`, color: insight.color }}
                  >
                    {insight.type === "trend" ? "📈" : insight.type === "alert" ? "⚠️" : "🔮"}
                  </div>
                  <div className="insight-meta">
                    <h4>{insight.title}</h4>
                    <span
                      className={`impact-badge ${insight.impact}`}
                      style={{ color: insight.color }}
                    >
                      {insight.impact} impact
                    </span>
                  </div>
                </div>
                <p className="insight-message">{insight.message}</p>
                <motion.button
                  className="insight-action"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          className="summary-card"
          variants={itemVariants}
          whileHover={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="summary-header">
            <h3>Executive Summary</h3>
            <motion.div
              className="ai-pulse"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.div>
          </div>
          <div className="summary-content">
            <p>
              Your team is performing exceptionally well this {selectedPeriod}. Key highlights:
              productivity increased by 12%, task completion is up 28%, and collaboration metrics
              show strong engagement. The AI analysis suggests maintaining current workflows while
              addressing the slight efficiency dip observed on Fridays. Overall trajectory:{" "}
              <strong>positive and accelerating</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Analytics;
