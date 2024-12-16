import React from 'react';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <div className="success-icon">🎉</div>
      <h2>Registration Successful!</h2>
      <p>Thank you for registering for the hackathon.</p>
      <p>Please join the Telegram channel for further instructions and important information.</p>
      <a href="https://t.me/hack_a_ton_5d_2024" target="_blank" rel="noopener noreferrer" className="telegram-link">
        <i className="fab fa-telegram"></i> Join our Telegram channel
      </a>
    </div>
  );
};

export default SuccessPage;

