import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './faqs.css';
import ReactGA from 'react-ga';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleArrow = (index) => {
    // Google Analytics event tracking
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });

    // Toggle FAQ visibility
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is an event where individuals or teams collaborate intensively to develop innovative solutions to specific challenges, using technology and creativity within a set timeframe."
    },
    {
      question: "What is this hackathon about?",
      answer: "This is an international 5-day virtual hackathon where participants solve real-world corporate-level problems. It's a platform to showcase talent, learn, and compete for a prize pool of Rs. 1Lakh+."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is open to participants globally. Team size must be between 2 to 5 members."
    },
    {
      question: "How much is the registration fee?",
      answer: "The registration fee is just Rs. 200 per team."
    },
    {
      question: "Is the hackathon online or offline?",
      answer: "The hackathon is completely online, allowing participants from all over the world to join."
    },
    {
      question: "How to register for the hackathon?",
      answer: "Visit our website, fill out the registration form with accurate details, pay the fee, and join the Telegram group for updates."
    },
    {
      question: "What is the prize pool?",
      answer: "The total prize pool exceeds Rs. 2,00,000, with the first prize being Rs. 75,000."
    },
    {
      question: "What is the team size?",
      answer: "Teams must have a minimum of 2 members and a maximum of 5 members."
    },
    {
      question: "What are the prerequisites for registering?",
      answer: "Participants should have a keen interest in technology and innovation. Knowledge of programming, design, or relevant technical skills is advantageous."
    },
    {
      question: "What is Triniteus?",
      answer: "Triniteus is a leading business solutions provider, at the forefront of technological innovation. We are honored to be the proud organizers of this exciting hackathon."
    }
  ];

  return (
    <div id="faqs" className="faq-container">
      <div className="faq-header">
        <h1 className="faq-title">
          <img src="/images/rrr.webp" alt="arrow-logo" className="faq-logo" />
          FAQs
        </h1>
      </div>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question"
              onClick={() => handleArrow(index)}
            >
              <h2 className="faq-question-text">{faq.question}</h2>
              <ChevronDown 
                className={`faq-chevron ${openFAQ === index ? 'faq-chevron-active' : ''}`}
              />
            </div>
            {openFAQ === index && (
              <div className="faq-answer-container">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;