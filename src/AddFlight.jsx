import React from 'react';
import './AddFlight.css';

function AddFlight() {
  return (
    <div className="add-flight">
      <h2>Name of Airline: NSS Airlines</h2>
      <form>
        <div className="form-group">
          <label>From</label>
          <input type="text" className="short-input" />
          <label>To</label>
          <input type="text" className="short-input" />
          <label>Date</label>
          <input type="date" className="date-input" />
          <label>Estd. Duration</label>
          <input type="text" className="duration-input" />
        </div>
        <div className="form-group">
          <label>Route</label>
          <input type="text" className="long-input" />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input type="text" />
          <label>Flight No.</label>
          <input type="text" />
        </div>
        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
}

export default AddFlight;
