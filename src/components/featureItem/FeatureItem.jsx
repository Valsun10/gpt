import React from "react";
import "./FeatureItem.css";

const FeatureItem = ({ title, text }) => {
  return (
    <div className="feature-item">
      <div className="feature-item-title-container">
        <div className="line" />
        <h1 className="feature-item-title">{title}</h1>
      </div>
      <div className="feature-item-text-container">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
