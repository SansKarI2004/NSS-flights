// src/Login.js
import React from 'react';


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <button className="tabactive">User</button>
          <button className="tab">Admin</button>
        </div>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Employee Id" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
