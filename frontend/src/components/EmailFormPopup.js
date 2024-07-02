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
        <h2>Share This Space</h2> {/* Added header */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
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
