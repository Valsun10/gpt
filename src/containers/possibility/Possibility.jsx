import React from "react";
import "./Possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding">
      <div className="possibility-left-container">
        <img src={possibility} alt="" />
      </div>
      <div className="possibility-right-container">
        <h3>Request Early Access to Get Started</h3>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  );
};

export default Possibility;
