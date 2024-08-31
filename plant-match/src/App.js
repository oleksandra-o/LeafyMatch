import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import CheckOutAsGuest from './components/CheckOutAsGuest';

function App() {
  const [cart, setCart] = useState([]); // This state will track the cart items

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/guest-checkout" element={<CheckOutAsGuest />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
