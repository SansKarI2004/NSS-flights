import React, { useState } from 'react';


function FlightInformation ()  {
  const [flights, setFlights] = useState([
    { from: 'Airport name and city', to: 'airport name and city', departure: '16:00', arrival: '20:00', flightNo: 'NS 1234' },
    { from: 'Airport name and city', to: 'airport name and city', departure: '16:00', arrival: '20:00', flightNo: 'NS 1234' },
    { from: 'Airport name and city', to: 'airport name and city', departure: '16:00', arrival: '20:00', flightNo: 'NS 1234' },
    { from: 'Airport name and city', to: 'airport name and city', departure: '16:00', arrival: '20:00', flightNo: 'NS 1234' },
  ]);

  return (
    <div className="flight-info-container">
      <header>
        <h1>NSS Flights</h1>
        <div className="user-info">
          <span>Saumya Jain</span>
          <div className="user-icons">
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </header>
      <nav>
        <button>customer data</button>
        <button>seat assignment</button>
        <button className="active">flight information</button>
        <button>update flight</button>
        <button>add flight</button>
        <button>news / mass updates</button>
      </nav>
      <div className="search-fields">
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Date" />
      </div>
      <table className="flights-table">
        <thead>
          <tr>
            <th>From (Departure)</th>
            <th>Departure time</th>
            <th>To (Arrival)</th>
            <th>Arrival Time</th>
            <th>Flight No</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.from}</td>
              <td>{flight.departure}</td>
              <td>{flight.to}</td>
              <td>{flight.arrival}</td>
              <td>{flight.flightNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightInformation;
