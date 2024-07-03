import React, { useState } from 'react';
import './EmailFormPopup.css';

const EmailFormPopup = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, message);
  };

  return (
    <div className="email-form-popup">
      <div className="email-form-popup-content">
        <h2>Share this space</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p>Email Address:</p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <p>Body:</p>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Send</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailFormPopup;
