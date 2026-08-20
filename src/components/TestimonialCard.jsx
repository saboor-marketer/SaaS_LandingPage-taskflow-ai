

const TestimonialCard = ({ name, role, company, initials, text }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">{initials}</div>
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-role">{role} at {company}</p>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
