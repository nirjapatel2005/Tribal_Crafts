import React, { useState } from 'react';
import './SellCraft.css';

const SellCraft = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    price: '',
    region: '',
    artistName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your submission! We will contact you soon.');
    setFormData({
      itemName: '',
      description: '',
      price: '',
      region: '',
      artistName: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="sell-craft">
      <div className="page-container">
        <h1>Sell Your Craft Items</h1>
        <p>Share your beautiful tribal art with the world. Fill out the form below to get started.</p>
        
        <form onSubmit={handleSubmit} className="sell-form">
          <div className="form-group">
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Region</label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Artist Name</label>
            <input
              type="text"
              name="artistName"
              value={formData.artistName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <button type="submit" className="submit-button">
            Submit Your Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellCraft;