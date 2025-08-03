import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      {/* Container for the new multi-layered background */}
      <div className="background-container">
        <div className="aurora-layer" id="aurora-1"></div>
        <div className="aurora-layer" id="aurora-2"></div>
        <div className="aurora-layer" id="aurora-3"></div>
      </div>
      
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      
      <main className="main-content">
        <header className="main-header">
          <h1>Welcome Back!</h1>
        </header>
        <div className="widget-grid">
          <div className="widget">
            <h3>Active Users</h3>
            <p>1,234</p>
          </div>
          <div className="widget">
            <h3>Sales</h3>
            <p>$56,789</p>
          </div>
          <div className="widget">
            <h3>Pending Tasks</h3>
            <p>12</p>
          </div>
           <div className="widget">
            <h3>Server Load</h3>
            <p>78%</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
