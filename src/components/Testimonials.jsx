import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              initials={testimonial.initials}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
