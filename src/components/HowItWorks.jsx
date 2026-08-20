

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Create your workspace',
      description: 'Set up your projects and organize your goals.'
    },
    {
      number: 2,
      title: 'Let AI organize your work',
      description: 'TaskFlow AI helps prioritize tasks and plan your workflow.'
    },
    {
      number: 3,
      title: 'Focus and achieve more',
      description: 'Track progress and complete your goals efficiently.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How It Works</h2>
        </div>
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
