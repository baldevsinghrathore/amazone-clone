import React from 'react';
import { useState } from 'react';

const RazorpayPayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = () => {
    setLoading(true);
    const options = {
      key: 'rzp_test_DYH0fycQiEAjgB', // Your Razorpay key
      amount: 1000, // Amount in paise (1000 paise = 10 INR)
      currency: 'INR',
      name: 'Dummy Payment',
      description: 'Test Payment',
      image: 'https://example.com/logo.png', // Your logo URL
      handler: function (response) {
        setLoading(false);
        alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    
    rzp.on('payment.failed', function (response) {
      setLoading(false);
      setError('Payment failed. Please try again.');
    });
  };

  return (
    <div className="paymentPage">
      <h2>Make a Payment</h2>
      {error && <p className="paymentError">{error}</p>}
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default RazorpayPayment;
