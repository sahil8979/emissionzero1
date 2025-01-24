import React, { useState, useEffect } from 'react';
import './Faqpage.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: " What is Emission Zero's primary mission?  ", answer: "Emission Zero aims to combat environmental pollution by leveraging cutting-edge technologies like algae photobioreactors and electrostatic precipitators. Our mission is to create sustainable solutions that reduce greenhouse gases, particulate matter, and other harmful pollutants, paving the way for a cleaner and greener future. " },
    { question: "How do algae photobioreactors work?", answer: "Our algae photobioreactors use algae to absorb CO₂ from the atmosphere and convert it into oxygen and biomass through photosynthesis. This process is highly efficient, with algae being 400 times more effective at sequestering CO₂ than trees, providing a scalable and sustainable solution to greenhouse gas emissions." },
    { question: " How are photobioreactors efficient than trees in reducing CO₂?", answer: "While trees play a vital role in sequestering CO₂, they take years to grow and have limited efficiency. Photobioreactors, on the other hand, start working immediately upon setup and are 400 times more efficient than trees, making them a faster and more scalable solution for CO₂ reduction." },
    { question: "Where can photobioreactors be installed?", answer: "Photobioreactors can be installed in diverse environments, including urban spaces, industrial sites, and even indoor settings. Their modular design allows flexibility, making them adaptable to various scales and locations. " },
    { question: "How can I partner with or support Emission Zero?", answer: "You can partner with us by adopting our solutions, collaborating on research, or supporting our mission through sponsorships and investments. Contact us via our website to explore opportunities for collaboration." },
    
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
    <div className="faq-container" id="faq">
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
          For assistance, please visit our <strong>Contact Us</strong> page or call our support hotline at <strong>(+91)9131903258</strong>.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
