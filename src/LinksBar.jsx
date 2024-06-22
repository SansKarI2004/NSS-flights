import React from 'react';
import './LinksBar.css';

function LinksBar() {
  return (
    <div className="links-bar">
      <button>customer data</button>
      <button>seat assignment</button>
      <button>flight information</button>
      <button>update flight</button>
      <button className="active">add flight</button>
      <button>news / mass updates</button>
    </div>
  );
}

export default LinksBar;
