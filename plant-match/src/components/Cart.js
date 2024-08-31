import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate

const TAX_RATE = 0.09; // Arizona's tax rate
const SHIPPING_COST = 9.99; // Flat shipping cost

const Cart = ({ cartItems }) => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to calculate subtotal price
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Calculate tax and total
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_COST;

  // Format the prices to two decimal places
  const formatPrice = (price) => (Math.round(price * 100) / 100).toFixed(2);

  // Handle guest checkout
  const handleGuestCheckout = () => {
    // Navigate to a new route for guest checkout
   
    navigate('/guest-checkout'); 
  };

  // Handle sign in
  const handleSignIn = () => {
    navigate('/signin'); 
  };

  return (
    <div className="container my-5 cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul className="cart-items" >
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - ${formatPrice(item.price)}
              </li>
            ))}
          </ul>

          <div className="checkout-info">
            <p><strong>Subtotal:</strong> ${formatPrice(subtotal)}</p>
            <p><strong>Tax (9%):</strong> ${formatPrice(tax)}</p>
            <p><strong>Shipping Cost:</strong> ${formatPrice(SHIPPING_COST)}</p>
            <p><strong>Total Price:</strong> ${formatPrice(total)}</p>
          </div>
          <div className="checkout-buttons d-flex justify-content-between">
            <button className="btn btn-outline-primary" onClick={handleGuestCheckout}>Check Out as Guest</button>
            <button className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
