import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="features">
      <div className="line" />
      <h1 className="features-title">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
