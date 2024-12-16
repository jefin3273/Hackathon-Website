import React, { useState } from 'react';
import '../styles/PaymentGateway.css';

const PaymentGateway = ({ onComplete, onPrev }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // TODO: Implement actual payment gateway integration
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="payment-gateway">
      <h2>Payment Gateway</h2>
      <div className="payment-details">
        <h3>Registration Details</h3>
        <ul>
          <li><strong>Registration Fee:</strong> ₹200</li>
          <li><strong>Processing Fee:</strong> ₹2</li>
          <li><strong>Total Amount:</strong> ₹202</li>
        </ul>
      </div>
      <button 
        onClick={handlePayment} 
        className="btn-pay" 
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      <button onClick={onPrev} className="btn-prev" disabled={isProcessing}>Previous</button>
    </div>
  );
};

export default PaymentGateway;

