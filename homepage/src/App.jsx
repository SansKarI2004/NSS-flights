import React, { useState } from 'react';


function App() {
  const [reviews, setReviews] = useState([
    { id: 1, text: '"Best airlines of 2024, with confirmed" - Times of India' },
    { id: 2, text: '"Best airlines of 2024, with confirmed" - Times of India' },
    { id: 3, text: '"Best airlines of 2024, with confirmed" - Times of India' },
    { id: 4, text: '"Best airlines of 2024, with confirmed" - Times of India' },
  ]);

  const [newReview, setNewReview] = useState('');

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '') {
      setReviews([...reviews, { id: reviews.length + 1, text: newReview }]);
      setNewReview('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <div className="logo">NSS Flights</div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Manage</a></li>
              <li><a href="/">Flights</a></li>
              <li><a href="/">Login</a></li>
              <li><a href="/">Sign Up</a></li>
            </ul>
          </nav>
          <div className="navbar-right">
            <button>Country</button>
            <button>Language</button>
          </div>
        </div>
      </header>
      <main>
        <section className="search-section">
          <div className="search-options">
            <button>One Way</button>
            <button>Round Trip</button>
            <button>Multi City</button>
          </div>
          <div className="search-fields">
          <select>
              <option value="">From</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
            </select>
            <select>
              <option value="">To</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
            </select>
            <input type="date" placeholder="Departure" />
            <input type="date" placeholder="Return" />
            <input type="number" placeholder="Travellers and Class" />
          </div>
          <div className="fare-options">
          <button>Special Fares</button>
            <button>Regular</button>
            <button>Student</button>
            <button>Senior Citizens</button>
            <button>Armed Forces</button>
            <button>Doctors/Nurses</button>
            <button>Promo Codes/Coupons</button>
          </div>
          <button className="search-button">Search Flights</button>
        </section>
        <section className="explore-section">
          <h2>Explore</h2>
          <div className="explore-cards">
          <div className="card">
              <img src="/deposit.jpg" alt="Get Inspired with #nofilter" />
              <p>Get Inspired with #nofilter</p>
              <p>Discover destinations through the lens of our #nofilter community.</p>
            </div>
            <div className="card">
              <img src="/holiday.jpg" alt="#nofilter by IndiGo" />
              <p>#nofilter by IndiGo</p>
              <p>Join the community and show us the world through your lens.</p>
            </div>
            <div className="card">
              <img src="/holiday2.jpg" alt="Summer vacay" />
              <p>Summer vacay</p>
              <p>Sun's out, fun's in! This is your guide to everything to do, and everywhere to go.</p>
            </div>
            <div className="card">
              <img src="/images.jpeg" alt="Summer vacay" />
              <p>christmas vacay</p>
              <p>Enjoy christmas on the streets on london</p>
            </div>
          </div>
          <div className="stats">
            <div>200+ Daily flights</div>
            <div>60+ Domestic destinations</div>
            <div>20+ International destinations</div>
            <div>1000k+ Happy passengers</div>
          </div>
        </section>
        <section className="reviews-section">
          <h2>Reviews</h2>
          <form onSubmit={handleReviewSubmit}>
            <input 
              type="text" 
              value={newReview} 
              onChange={handleReviewChange} 
              placeholder="Write your review here" 
              className="review-input"
            />
            <button type="submit" className="submit-review-button">Submit Review</button>
          </form>
          <div className="review-cards">
            {reviews.map(review => (
              <div key={review.id} className="review-card">{review.text}</div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Name: 6840230-1--482866</p>
          <p>Name: 6840230-1--482866</p>
          <p>Email: queries@gmail.com</p>
        </div>
        <div className="quick-links">
          <h2>Quick Links</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Facilisis vestibulum senectus sed sit eu pharetra elit tellus leo. Accumsan arcu facilisi neque at tristique eget habitasse egestas.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Facilisis vestibulum senectus sed sit eu pharetra elit tellus leo. Accumsan arcu facilisi neque at tristique eget habitasse egestas.</p>
        </div>
        <div className="social-media">
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
