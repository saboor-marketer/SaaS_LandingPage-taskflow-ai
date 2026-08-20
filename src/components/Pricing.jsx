import { useState } from 'react';
import { pricingPlans } from '../data/pricing';
import PricingCard from './PricingCard';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple pricing for everyone</h2>
        </div>

        <div className="pricing-toggle">
          <span className={`toggle-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
          <button 
            className={`toggle-switch ${isYearly ? 'active' : ''}`}
            onClick={togglePricing}
            aria-label="Toggle pricing period"
          />
          <span className={`toggle-label ${isYearly ? 'active' : ''}`}>Yearly</span>
          <span className="toggle-badge">Save 20%</span>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard 
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
