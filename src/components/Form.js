import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-field">
          <input type="text" placeholder="First Name" id="firstName" required />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small className="erroMsg">Error msg</small>
        </div>
        <div className="form-field">
          <input type="text" placeholder="Last Name" id="lastName" required />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small className="erroMsg">Error msg</small>
        </div>
        <div className="form-field">
          <input type="email" placeholder="Email Address" id="email" required />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small className="erroMsg">Error msg</small>
        </div>
        <div className="form-field">
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small className="erroMsg">Error msg</small>
        </div>
        <button className="submit-btn">Claim your free trial</button>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <a href="#">Terms and Services</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
