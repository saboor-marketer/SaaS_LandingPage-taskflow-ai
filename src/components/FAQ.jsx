import { useState } from 'react';
import { faqData } from '../data/faq';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
              >
                <span className="faq-question-text">{faq.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
