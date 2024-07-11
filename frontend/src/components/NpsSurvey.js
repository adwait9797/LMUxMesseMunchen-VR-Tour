import React, { useState } from 'react';
import axios from 'axios';
import './NpsSurvey.css';

const NpsSurvey = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (rating === null) {
      setError('Please select a rating.');
      return;
    }
    try {
      console.log('Submitting rating:', rating); // Log the rating being submitted
      const response = await axios.post('/api/nps', { rating });
      console.log('Response from server:', response); // Log the response from the server
      setSubmitted(true);
      setError('');
    } catch (err) {
      console.error('Error submitting rating:', err); // Log any errors
      setError('There was an error submitting your rating. Please try again.');
    }
  };

  return (
    <div className="nps-survey">
      <h2>Rate Your Experience</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="nps-rating">
            {[...Array(11)].map((_, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={index}
                  checked={rating === index}
                  onChange={() => setRating(index)}
                />
                {index}
              </label>
            ))}
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NpsSurvey;