import { FaCheck } from 'react-icons/fa';

const PricingCard = ({ plan, isYearly }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const period = isYearly ? '/year' : '/month';

  return (
    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <div className="popular-badge">Most Popular</div>}
      <h3 className="pricing-plan-name">{plan.name}</h3>
      <div className="pricing-price">
        ${price}
        <span className="pricing-period">{period}</span>
      </div>
      <ul className="pricing-features">
        {plan.features.map((feature, index) => (
          <li key={index} className="pricing-feature">
            <FaCheck className="pricing-feature-icon" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`pricing-button ${plan.popular ? 'pricing-button-primary' : 'pricing-button-secondary'}`}>
        {plan.name === 'Starter' ? 'Get Started' : 'Start Free Trial'}
      </button>
    </div>
  );
};

export default PricingCard;
