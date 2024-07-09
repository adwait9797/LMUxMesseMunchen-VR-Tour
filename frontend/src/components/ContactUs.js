import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ContactUs.css';
import logo from './assets/logo.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      <div className="logo-container">
        <img src={logo} alt="Messe München" className="logo" />
      </div>
      <div className="form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Let us know!"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
        <Link to="/" className="button">Home</Link>
      </div>
    </div>
  );
};

export default ContactUs;
