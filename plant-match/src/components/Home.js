import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import plantsData from '../plants.json';

// Function to get unique options for filters
const uniqueOptions = (data, key) => {
  const unique = [...new Set(data.map(item => item[key]))];
  return unique.sort();
};

const Home = ({ setCart, cart }) => {
  const [filteredPlants, setFilteredPlants] = useState(plantsData);
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({
    light: '',
    watering: '',
    humidity: '',
    fertilizer: '',
  });

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  useEffect(() => {
    let filtered = plantsData.filter(plant => {
      return Object.keys(filters).every(key =>
        filters[key] ? plant[key] === filters[key] : true
      );
    });

    // Sort by price
    if (sortOrder === 'lowHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredPlants(filtered);
  }, [filters, sortOrder]);

  return (
    <div>
      <Navbar cart={cart} />
      
      <header className="hero-section">
        <section id="hero" className="d-flex align-items-center justify-content-center">
          <h1 className="hero-heading">Your personal plant advisor</h1>
        </section>
      </header>
     {/* New Product Section */}
     <main className="main-content">
        <section className="container my-5">

          {/* New Product Heading */}
          <div className="row mb-3">
            <div className="col-12 text-center">
              <h1 className="new-product-heading">NEW PRODUCT COMING SOON</h1>
            </div>
          </div>

          {/* Product and Text Section */}
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6">
              <img src="images/rose-pink.jpg" alt="Orchid" className="img-fluid rounded-3 rounded-img" />
            </div>

            {/* Text Section */}
            <div className="col-md-6">
              <div className="text-container bg-light rounded-3 p-4 shadow">
                <h2>Petite Petals, Grand Beauty</h2>
                <p>Discover the charm of our Petite Rose — a tiny wonder that brings a burst of joy and sophistication to your cozy corner. Its blossoms are a celebration of nature's understated allure. Perfect for gifting, or simply to pamper yourself.</p>
              </div>
            </div>
          </div>

        </section>
      </main>



      <div className="container my-5">
        {/* Filters */}
        <div className="row mb-4">
          {Object.keys(filters).map((filter, index) => (
            <div className="col-md-3" key={index}>
              <div className="filter-option">
                <h5>{filter.charAt(0).toUpperCase() + filter.slice(1)}</h5>
                <select className="form-select" onChange={(e) => handleFilterChange(filter, e.target.value)}>
                  <option value="">All</option>
                  {uniqueOptions(plantsData, filter).map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          {/* Sort By Price Dropdown */}
          <div className="col-md-3">
            <div className="filter-option">
              <h5>Sort by Price</h5>
              <select className="form-select" onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">Default</option>
                <option value="lowHigh">Low to High</option>
                <option value="highLow">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        {/* Plant List */}
        <div className="row">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={plant.image} className="card-img-top" alt={plant.name} />
                <div className="card-body">
                  <h5 className="card-title">{plant.name}</h5>
                  <p className="card-text">{plant.description}</p>
                  <p className="card-text"><strong>Price:</strong> ${plant.price}</p>
                  <button onClick={() => addToCart(plant)} className="btn btn-primary btn-add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
