import React from "react";
import BuyButton from "./BuyButton";
import Form from "./Form";
import "../styles/FormSection.css";

const FormSection = () => {
  return (
    <div className="form-section-container">
      <BuyButton />
      <Form />
    </div>
  );
};

export default FormSection;
