import { FaRobot, FaCalendarAlt, FaUsers, FaChartLine, FaBrain, FaCogs } from 'react-icons/fa';

const iconMap = {
  'FaRobot': FaRobot,
  'FaCalendarAlt': FaCalendarAlt,
  'FaUsers': FaUsers,
  'FaChartLine': FaChartLine,
  'FaBrain': FaBrain,
  'FaCogs': FaCogs
};

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="feature-card">
      <div className="feature-icon">
        {IconComponent && <IconComponent />}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
