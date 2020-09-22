import React from "react";
import "../styles/BuyButton.css";

const BuyButton = () => {
  return (
    <div className="buy-button">
      <a href="https://google.com">
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </a>
    </div>
  );
};

export default BuyButton;
