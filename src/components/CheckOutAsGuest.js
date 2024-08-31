import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckOutAsGuest = () => {
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission,
    // e.g., sending data to a server or displaying a confirmation message
    console.log('Checkout as guest processed.');

    // Navigate to a confirmation page or back to the home page after submission
    navigate('/order-confirmation');
  };

  return (
    <div className="container my-5 checkout-container">
      <h2>Guest Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h4>Contact Information</h4>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailInput" required />
        </div>

        <h4>Shipping Address</h4>
        <div className="mb-3">
          <label htmlFor="fullNameInput" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullNameInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="addressInput" className="form-label">Address</label>
          <input type="text" className="form-control" id="addressInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="cityInput" className="form-label">City</label>
          <input type="text" className="form-control" id="cityInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="stateInput" className="form-label">State</label>
          <input type="text" className="form-control" id="stateInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="zipCodeInput" className="form-label">ZIP Code</label>
          <input type="text" className="form-control" id="zipCodeInput" required />
        </div>
        
        <h4>Payment Information</h4>
        <div className="mb-3">
          <label htmlFor="cardNameInput" className="form-label">Name on Card</label>
          <input type="text" className="form-control" id="cardNameInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumberInput" className="form-label">Card Number</label>
          <input type="text" className="form-control" id="cardNumberInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="expMonthInput" className="form-label">Expiration Month</label>
          <input type="text" className="form-control" id="expMonthInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="expYearInput" className="form-label">Expiration Year</label>
          <input type="text" className="form-control" id="expYearInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="cvvInput" className="form-label">CVV</label>
          <input type="text" className="form-control" id="cvvInput" required />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>
    </div>
  );
};

export default CheckOutAsGuest;
