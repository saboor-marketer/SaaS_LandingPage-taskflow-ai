import { features } from '../data/features';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Everything you need to stay productive</h2>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
