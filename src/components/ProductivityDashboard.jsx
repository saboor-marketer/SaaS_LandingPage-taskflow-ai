

const ProductivityDashboard = () => {
  const stats = [
    { value: '87%', label: 'Productivity' },
    { value: '24', label: 'Tasks Completed' },
    { value: '6.5h', label: 'Focus Time' },
    { value: '92%', label: 'Goal Progress' }
  ];

  const chartData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 80 },
    { day: 'Wed', value: 75 },
    { day: 'Thu', value: 90 },
    { day: 'Fri', value: 85 },
    { day: 'Sat', value: 70 },
    { day: 'Sun', value: 60 }
  ];

  return (
    <section className="productivity-dashboard">
      <div className="productivity-dashboard-container">
        <div className="productivity-dashboard-header">
          <h2 className="productivity-dashboard-title">Your Productivity Dashboard</h2>
        </div>
        
        <div className="dashboard-preview">
          <div className="dashboard-preview-header">
            <div>
              <h3 className="dashboard-preview-title">Weekly Overview</h3>
              <p className="dashboard-preview-subtitle">Track your progress and achievements</p>
            </div>
          </div>

          <div className="dashboard-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="dashboard-stat-card">
                <div className="dashboard-stat-value">{stat.value}</div>
                <div className="dashboard-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="dashboard-chart">
            <h4 className="chart-title">Weekly Progress</h4>
            <div className="chart-bars">
              {chartData.map((data, index) => (
                <div 
                  key={index} 
                  className="chart-bar" 
                  style={{ height: `${data.value}%` }}
                >
                  <span className="chart-bar-label">{data.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivityDashboard;
