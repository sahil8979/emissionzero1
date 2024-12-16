import React, { useState, useEffect } from 'react';
import './Faqpage.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "What is green energy?", answer: "Green energy is power derived from natural resources such as sunlight, wind, and water. It is renewable, sustainable, and environmentally friendly." },
    { question: "How does green energy benefit the environment?", answer: "Green energy reduces greenhouse gas emissions, improves air quality, conserves natural resources, and slows down climate change." },
    { question: "What green energy solutions does your company offer?", answer: "We provide solar panel installations, wind turbine setups, energy audits, and consulting for greener energy consumption." },
    { question: "What support services do you offer after installing green energy solutions?", answer: "We offer maintenance, troubleshooting, performance monitoring, and customer support for installed systems." },
    { question: "How do solar panels work?", answer: "Solar panels absorb sunlight and convert it into electricity through photovoltaic cells, which can then power homes and businesses." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle open and close dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenIndex(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQ</h1>
      <p className="faq-subtitle">Here you will find the answers to the frequently asked questions.</p>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div
            className="faq-item"
            key={index}
            onClick={(e) => e.stopPropagation()} // Prevent closing dropdown when clicking inside
          >
            <div
              className="faq-question"
              onClick={() => handleToggle(index)} // Toggle only the clicked question
            >
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                {openIndex === index ? 'x' : '+'}
              </span>
            </div>
            <div className={`faq-answer-wrapper ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="faq-footer">
        <p className='still'>Still have questions?</p>
        <p>
          For assistance, please visit our <a href="/contact">Contact Us</a> page or call our support hotline at <strong>(677) 555-0110</strong>.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
