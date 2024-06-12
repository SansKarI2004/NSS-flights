import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome (name)! What would you like to do today?</p>
        <div className="button-container">
          <button className="app-button">Customer Info/ Passenger Info</button>
          <button className="app-button">Seat Assignment</button>
          <button className="app-button">Flight Information</button>
          <button className="app-button">Update Flight</button>
          <button className="app-button">Add Flight</button>
          <button className="app-button">News/ Mass Messages</button>
        </div>
      </header>
    </div>
  );
}

export default App;
