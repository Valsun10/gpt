import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import AI from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-left">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-input">
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="header-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="header-right">
        <img src={AI} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
