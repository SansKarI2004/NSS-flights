import React from 'react';


function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-switch">
          <button className="login-switch-btn active">User</button>
          <button className="login-switch-btn">Admin</button>
        </div>
        <h2>Log In</h2>
        <form className="login-form">
          <input type="text" placeholder="Email, phone number or username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="or-separator">OR</div>
        <div className="social-login">
          <button className="social-btn google">Continue with Google</button>
          <button className="social-btn apple">Continue with Apple</button>
          <button className="social-btn facebook">Continue with Facebook</button>
        </div>
        <div className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
