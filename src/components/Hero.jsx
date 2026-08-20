import { FaPlay, FaCheck, FaRobot } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Work smarter. Achieve more with AI.
          </h1>
          <p className="hero-description">
            TaskFlow AI helps individuals and teams organize work, automate repetitive tasks, and stay focused on what matters most.
          </p>
          <div className="hero-buttons">
            <button className="hero-button hero-button-primary">
              Get Started Free
            </button>
            <button className="hero-button hero-button-secondary">
              <FaPlay />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-dashboard">
          <div className="dashboard-sidebar">
            <div className="sidebar-item active">Dashboard</div>
            <div className="sidebar-item">Tasks</div>
            <div className="sidebar-item">Calendar</div>
            <div className="sidebar-item">Analytics</div>
          </div>
          
          <div className="dashboard-content">
            <div className="dashboard-tasks">
              <div className="task-card">
                <div className="task-checkbox">
                  <FaCheck />
                </div>
                <div className="task-text">Review project proposal</div>
                <div className="task-progress">
                  <div className="task-progress-bar" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="task-card">
                <div className="task-checkbox"></div>
                <div className="task-text">Team standup meeting</div>
                <div className="task-progress">
                  <div className="task-progress-bar" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="task-card">
                <div className="task-checkbox"></div>
                <div className="task-text">Update documentation</div>
                <div className="task-progress">
                  <div className="task-progress-bar" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="task-card">
                <div className="task-checkbox"></div>
                <div className="task-text">Code review</div>
                <div className="task-progress">
                  <div className="task-progress-bar" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>

            <div className="dashboard-stats">
              <div className="stat-item">
                <div className="stat-label">Productivity</div>
                <div className="stat-value">87%</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Tasks Done</div>
                <div className="stat-value">24</div>
              </div>
              <div className="ai-suggestion">
                <div className="ai-suggestion-title">
                  <FaRobot />
                  AI Suggestion
                </div>
                <div className="ai-suggestion-text">
                  Focus on code review next for optimal productivity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
