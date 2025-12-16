import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div className="app">
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      <main className="main-content">
        {activeView === "dashboard" ? (
          <Dashboard key="dashboard" />
        ) : (
          <Analytics key="analytics" />
        )}
      </main>
    </div>
  );
}

export default App;
