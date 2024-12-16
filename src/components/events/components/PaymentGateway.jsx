import React, { useState } from 'react';
import '../styles/PaymentGateway.css';

const PaymentGateway = ({ onComplete, onPrev }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  // Payment success handler
  const handlePaymentSuccess = (paymentResponse) => {
    setIsProcessing(false);
    console.log('Payment Successful:', paymentResponse);
    onComplete();  // Trigger the onComplete callback after payment success
  };

  // Payment failure handler
  const handlePaymentFailure = (error) => {
    setIsProcessing(false);
    console.log('Payment Failed:', error);
    alert('Payment Failed. Please try again!');
  };

  const handlePayment = () => {
    setIsProcessing(true);

    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Create Razorpay Payment options
    const options = {
      key: 'rzp_live_xRLYmWJAkFztHX',  // Replace with your Razorpay Key ID
      amount: 30708,  // Amount in paise (₹300)
      currency: 'INR',
      name: 'Hackathon Registration Payment',
      description: 'HACK-A-TON Registration Fee',
      image: 'https://your-logo-url.com/logo.png',  // Optional: Add your logo here
      handler: handlePaymentSuccess,  // Success handler
      notes: {
        order_id: orderId,  // Use generated unique order ID
      },
      theme: {
        color: '#F37254',  // Customize Razorpay checkout button color
      },
    };

    // Trigger Razorpay Checkout
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="payment-gateway">
      <h2>Payment Gateway</h2>
      <div className="payment-details">
        <h3>Registration Details</h3>
        <ul>
          <li><strong>Registration Fee:</strong> ₹300</li>
          <li><strong>Processing Fee:</strong> ₹7.08</li>
          <li><strong>Total Amount:</strong> ₹307.08</li>
        </ul>
      </div>
      <button
        onClick={handlePayment}
        className="btn-pay"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      <button onClick={onPrev} className="btn-prev" disabled={isProcessing}>
        Previous
      </button>
    </div>
  );
};

export default PaymentGateway;
